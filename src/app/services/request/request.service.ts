/**Items */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

/**Environment */
import { environment } from '@environments/environment';

/**Models */
import { RequestModel } from '@models/request/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  /**Variables */
  private apiUrl = `${environment.url}/api/request`;

  /**Injects */
  private http = inject(HttpClient);

  /**
   * Método que nos permite administrar la forma en que se mostrarán los errores en caso de que se active la opción en el entorno.
   * @param title string con el titulo de donde se manda el error.
   * @param error string con el error.
   */
  private showError(title: string, error: any) {
    console.log('Error en el archivo: request.service.ts');
    console.log(title, '\n\t', environment.showErrors ? error : '');
  }

  /**
   * Método que nos permite solicitar la solicitud de un item.
   * @param request RequestModel solicitud con la información básica.
   * @param item_id string con el id del item.
   * @returns RequestModel de la solicitud solicitada.
   */
  async addRequest(request: RequestModel, item_id: string): Promise<RequestModel | undefined> {
    try {
      const response: any = await firstValueFrom(this.http.post(this.apiUrl, { request, item_id }));
      if (response) {
        const { request: requestSaved } = response;
        if (requestSaved) {
          return requestSaved;
        }
        this.showError('Error al solicitar item:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Método que nos permite solicitar las solicitudes guardadas en la base de datos.
   * @returns Array<RequestModel> con las solicitudes.
   */
  async getRequests(): Promise<Array<RequestModel>> {
    try {
      const response: any = await firstValueFrom(this.http.get(this.apiUrl));
      if (response) {
        const { requests } = response;
        if (requests) {
          return requests;
        }
        this.showError('Error al obtener solicitudes:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return [];
  }

  /**Método que nos permite actualizar la solicitud */
  async updateRequest(request: RequestModel): Promise<RequestModel | undefined> {
    try {
      const response: any = await this.http.put(this.apiUrl + "/" + request._id, { request }).toPromise();
      if (response) {
        const { message, request: requestSaved } = response;
        if (requestSaved) {
          return requestSaved;
        }
        this.showError('Error al modificar solicitud:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**Método que nos permite verificar si un item esta disponible en cierta fecha en especifico. */
  async checkAvailability(request: RequestModel) {
    try {
      const response: any = await this.http.get(this.apiUrl + "/checkAvailability" + "/" + request._id).toPromise();
      if (response) {
        const { message, requests } = response;
        if (requests) {
          return { requests };
        }
        this.showError('Error al revisar la disponibilidad:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return {};
  }

  async deleteRequest(requests: Array<RequestModel>, request_id: String): Promise<RequestModel | undefined> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + request_id).toPromise();
      if (response) {
        const { message, request } = response;
        if (request) {
          const index = requests.findIndex((request: RequestModel) => request._id === request_id);
          if (index !== -1) {
            return requests.splice(index, 1)[0];
          }
        }
        this.showError('Error al eliminar el solicitud:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  async addMessage(request: RequestModel, message: String) {
    try {
      const response: any = await this.http.put(this.apiUrl + "/message/" + request._id, { message }).toPromise();
      if (response) {
        const { messageSaved, message } = response;
        if (messageSaved) {
          request.messages?.push(messageSaved);
          return messageSaved;
        }
        this.showError('Error al mandar mensaje:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**Método que nos permite obtener las solicitudes a las que tiene el acceso el usuario para una fecha en especifico */
  async getRequestsToday(date: String): Promise<Array<RequestModel>> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/toDate/" + date).toPromise();
      if (response) {
        const { message, requests } = response;
        if (requests) {
          return requests;
        }
        this.showError('Error al obtener solicitudes:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return [];
  }
}
