/**Imports */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

/**Environments */
import { environment } from '@environments/environment';
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';
import { ItemModel } from '@models/inventory/item.model';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  /**Variables */
  private apiUrl = `${environment.url}/api/data/export`;

  /**Injects */
  private http = inject(HttpClient);

  /**
   * Método que nos permite administrar la forma en que se mostrarán los errores en caso de que se active la opción en el entorno.
   * @param title string con el titulo de donde se manda el error.
   * @param error string con el error.
   */
  private showError(title: string, error: any) {
    if (environment.showErrors) {
      console.log('Error en el archivo: export.service.ts');
      console.log(title, '\n\t', error);
    }
  }

  /**
   * Método que nos permite solicitar obtener las áreas disponibles en la base de datos.
   * @returns Array<AreaModel> con todas las áreas.
   */
  async getAreas(): Promise<Array<AreaModel>> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/areas").toPromise();
      if (response) {
        const { areas, message } = response;
        if (areas) {
          return areas;
        }
        this.showError('Error al obtener áreas:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return [];
  }

  /**
   * Método que nos permite solicitar obtener las categorías disponibles en la base de datos.
   * @returns Array<CategoryModel> con todas las categorías.
   */
  async getCategories(area_id: String): Promise<Array<CategoryModel>> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/categories/" + area_id).toPromise();
      if (response) {
        const { categories, message } = response;
        if (categories) {
          return categories;
        }
        this.showError('Error al obtener categorías:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return [];
  }


  /**
   * Método que nos permite solicitar los items de tipo reactivo o equipo que están en la base de datos
   * y generar un archivo Excel con ellos.
   * @param category_id ID de la categoría para obtener los ítems.
   */
  async exportItemsToExcel(category_id: String, type: Number): Promise<void> {
    try {
      const response: any = await this.http.get(this.apiUrl + (type == 1 ? '/equipments/' : '/reagents/') + category_id).toPromise();
      const { items } = response;
      if (items) {
        this.generateExcel(items, type);
      } else {
        this.showError('Error al obtener la información de los ítems.', undefined);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
  }

  private generateExcel(items: Array<ItemModel>, type: Number): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);

    if (type == 1) {
      // Agregar encabezados
      XLSX.utils.sheet_add_aoa(worksheet, [[
        'Nombre', 'N° Inventario', 'Marca', 'Modelo', 'N° Serie',
        'NUI', 'Ubicación', 'Encargado'
      ]]);

      // Agregar filas
      items.forEach(item => {
        XLSX.utils.sheet_add_json(worksheet, [{
          name: item.name,
          inventory: item.inventory,
          brand: item.brand,
          model: item.model,
          serial: item.serial,
          nui: item.nui,
          location: item.location,
          manager: item.manager
        }], { skipHeader: true, origin: -1 });
      });

      const workbook: XLSX.WorkBook = {
        Sheets: { 'Equipos': worksheet },
        SheetNames: ['Equipos']
      };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Equipos');
    } else {
      // Agregar encabezados
      XLSX.utils.sheet_add_aoa(worksheet, [[
        'Nombre', 'N° Inventario', 'Marca', 'Stock', 'Formula',
        'Presentación', 'Lote', 'Fecha de caducidad', 'Cantidad por unidad'
      ]]);

      // Agregar filas
      items.forEach(item => {
        XLSX.utils.sheet_add_json(worksheet, [{
          name: item.name,
          inventory: item.inventory,
          brand: item.brand,
          stock: item.stock,
          formula: item.formula,
          presentation: item.presentation,
          lot: item.lot,
          expirationDate: item.expirationDate,
          quantity: item.quantity,
        }], { skipHeader: true, origin: -1 });
      });

      const workbook: XLSX.WorkBook = {
        Sheets: { 'Reactivos': worksheet },
        SheetNames: ['Reactivos']
      };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'Reactivos');
    }
  }


  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION;
    link.click();
  }

}
