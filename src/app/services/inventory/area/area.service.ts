/**Imports */
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

/**Environment */
import { environment } from '@environments/environment';
import { AreaModel } from '@models/inventory/area.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  /**Variables */
  private apiUrl = `${environment.url}/api/inventory/area`;
  private areaModal = -1;

  /**Injects */
  private http = inject(HttpClient);

  setAreaModal(areaModal: number) {
    this.areaModal = areaModal;
  }

  getAreaModal(): number {
    return this.areaModal;
  }

  /**
   * Método que nos permite administrar la forma en que se mostrarán los errores en caso de que se active la opción en el entorno.
   * @param title string con el titulo de donde se manda el error.
   * @param error string con el error.
   */
  private showError(title: string, error: any) {
    if (environment.showErrors) {
      console.log('Error en el archivo: area.service.ts');
      console.log(title, '\n\t', error);
    }
  }

  getIconsArea(): Array<string> {
    const iconsAreas: Array<string> = [
      'assets/inventory/area/analytics.svg',
      'assets/inventory/area/atomic.svg',
      'assets/inventory/area/biology.svg',
      'assets/inventory/area/chemical.svg',
      'assets/inventory/area/computer.svg',
      'assets/inventory/area/education.svg',
      'assets/inventory/area/health.svg',
      'assets/inventory/area/industrial.svg',
      'assets/inventory/area/laboratory.svg',
      'assets/inventory/area/math.svg',
      'assets/inventory/area/physic.svg',
      'assets/inventory/area/physicochemical.svg'
    ];
    return iconsAreas;
  }

  /**
  * Get que nos permite obtener todas las áreas de la base de datos de acuerdo al usuario.
  * @returns Promise<Array<AreaModel>>
  */
  async getAreas(): Promise<Array<AreaModel>> {
    try {
      const response: any = await this.http.get(this.apiUrl).toPromise();
      if (response) {
        const { message, areas } = response;
        if (areas) {
          return areas;
        }
        this.showError('Error al obtener áreas: ', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return [];
  }

  /**
   * Método que nos permite solicitar un área de acuerdo a un id en especifico.
   * @param _id string con el id del área.
   * @returns el área, o en caso contrario undefined.
   */
  async getArea(_id: String): Promise<AreaModel | undefined> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/" + _id).toPromise();
      if (response) {
        const { message, area } = response;
        if (area) {
          return area;
        }
        this.showError('Error al obtener área:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Método que nos permite solicitar una adición de un área a la base de datos.
   * @param areas Array<AreaModel> copia de las áreas en la base de datos antes de la solicitud.
   * @param area AreaModel que se solicitará adicionar.
   * @returns AreaModel adicionada, o undefined en caso de algún error con la solicitud.
   */
  async addArea(areas: Array<AreaModel>, area: AreaModel): Promise<AreaModel | undefined> {
    try {
      const response: any = await firstValueFrom(this.http.post(this.apiUrl, { area }));
      if (response) {
        const { area: areaSaved } = response;
        if (areaSaved) {
          areas.push(areaSaved);
          return areaSaved;
        }
        this.showError('Error al crear área:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }


  /**
   * Método que nos permite solicitar la actualización la información de un área.
   * @param updateArea información actualizada del área.
   * @returns AreaModel del área actualizada.
   */
  async updateArea(updateArea: AreaModel): Promise<AreaModel | undefined> {
    try {
      const response: any = await firstValueFrom(this.http.put(this.apiUrl + "/" + updateArea._id, { area: updateArea }));
      if (response) {
        const { message, area } = response;
        if (area) {
          return area;
        }
        this.showError('Error al editar área:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Método que nos permite realizar la solicitud para la eliminación de un área.
   * @param areas contiene la copia del arreglo de áreas que tiene la página.
   * @param area_id string con el id del área a eliminar.
   * @returns AreaModel del área eliminada.
   */
  async deleteArea(areas: Array<AreaModel>, area_id: String): Promise<AreaModel | undefined> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + area_id).toPromise();
      if (response) {
        const { message, area } = response;
        if (area) {
          const index = areas.findIndex((area: AreaModel) => area._id === area_id);
          if (index !== -1) {
            areas.splice(index, 1);
          }
          return area;
        }
        this.showError('Error al eliminar el área:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }
}
