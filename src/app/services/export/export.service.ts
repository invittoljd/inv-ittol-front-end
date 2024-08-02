/**Imports */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

/**Environments */
import { environment } from '@environments/environment';
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';
import { firstValueFrom } from 'rxjs';

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
   * Método que nos permite solicitar el link del excel creado con los items de tipo equipo que están en la base de datos.
   * @returns string con el link para descargar el archivo creado, o undefined en caso contrario.
   */
  async getLinkFileEquipments(category_id: String): Promise<String | undefined> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/equipments/" + category_id).toPromise();
      if (response) {
        const { link, message } = response;
        if (link) {
          return link;
        }
        this.showError('Error al obtener el archivo:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Método que nos permite solicitar el link del excel creado con los items de tipo reactivo que están en la base de datos.
   * @returns string con el link para descargar el archivo creado, o undefined en caso contrario.
   */
  async getLinkFileReagents(category_id: String): Promise<String | undefined> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/reagents/" + category_id).toPromise();
      if (response) {
        const { link, message } = response;
        if (link) {
          return link;
        }
        this.showError('Error al obtener el archivo:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }
}
