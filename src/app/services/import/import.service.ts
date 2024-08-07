/**Imports */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

/**Environments */
import { environment } from '@environments/environment';

/**Models */
import { ItemModel } from '@models/inventory/item.model';

@Injectable({
  providedIn: 'root'
})
export class ImportService {
  /**Variables */
  private apiUrl = `${environment.url}/api/data/import`;

  /**Injects */
  private http = inject(HttpClient);

  /**
   * Método que nos permite administrar la forma en que se mostrarán los errores en caso de que se active la opción en el entorno.
   * @param title string con el titulo de donde se manda el error.
   * @param error string con el error.
   */
  private showError(title: string, error: any) {
    if (environment.showErrors) {
      console.log('Error en el archivo: import.service.ts');
      console.log(title, '\n\t', error);
    }
  }

  /**Método que nos permite solicitar subir un arreglo de items a una categoría en especifico */
  async sendItems(category_id: String | undefined, items: Array<ItemModel>): Promise<Array<ItemModel> | undefined> {
    if (category_id) {
      try {
        console.log(items);
        const response: any = await firstValueFrom(this.http.post(this.apiUrl + "/" + category_id, { items }));
        if (response) {
          const { items, message } = response;
          if (items) {
            return items;
          }
          this.showError('Error al subir archivos:', message);
        }
      } catch (error) {
        this.showError('Error al realizar la solicitud:', error);
      }
    }
    return [];
  }
}
