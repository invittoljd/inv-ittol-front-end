/**Imports */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

/**Environment */
import { environment } from '@environments/environment';

/**Models */
import { CategoryModel } from '@models/inventory/category.model';
import { ItemModel } from '@models/inventory/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  /**Variables */
  private apiUrl = `${environment.url}/api/inventory/item`;

  /**Injects */
  private http = inject(HttpClient);

  /**
   * Método que nos permite administrar la forma en que se mostrarán los errores en caso de que se active la opción en el entorno.
   * @param title string con el titulo de donde se manda el error.
   * @param error string con el error.
   */
  private showError(title: string, error: any) {
    console.log('Error en el archivo: category.service.ts');
    console.log(title, '\n\t', environment.showErrors ? error : '');
  }

  /**
   * Método que nos permite solicitar la eliminación de un item.
   * @param categorySelected Categoría donde esta la lista de items.
   * @param item_id String con el id del item.
   * @returns ItemModel del item eliminado.
   */
  async deleteItem(categorySelected: CategoryModel, item_id: String): Promise<ItemModel | undefined> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + item_id).toPromise();
      if (response) {
        const { message, item } = response;
        if (item) {
          const index = categorySelected.items.findIndex((item_list: ItemModel) => item_list._id === item_id);
          if (index !== -1) {
            categorySelected.items.splice(index, 1);
          }
          return item;
        }
        this.showError('Error al eliminar el item:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Método que nos permite obtener solicitar la adición de un item a la base de datos.
   * @param category_id string con el id de la categoría al que se va a adicionar dicho item.
   * @param items Array<ItemModel> copia local de los items almacenados en la base de datos.
   * @param item ItemModel del item a adicionar.
   * @returns ItemModel del item adicionado.
   */
  async addItem(category_id: String, items: Array<ItemModel>, item: ItemModel): Promise<ItemModel | undefined> {
    try {
      const response: any = await firstValueFrom(this.http.post(this.apiUrl, { category_id, item: item }));
      if (response) {
        const { item: itemSaved } = response;
        if (itemSaved) {
          items.push(itemSaved);
          return itemSaved;
        }
        this.showError('Error al crear item:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Método que nos permite solicitar la actualización de información de un item.
   * @param updateItem ItemModel con la información actualizada del item.
   * @returns ItemModel con el item actualizado, o en caso contrario undefined.
   */
  async updateItem(item: ItemModel): Promise<ItemModel | undefined> {
    try {
      const response: any = await firstValueFrom(this.http.put(this.apiUrl + "/" + item._id, { item }));
      if (response) {
        const { message, item:itemUpdated } = response;
        if (itemUpdated) {
          return itemUpdated;
        }
        this.showError('Error al editar item:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }
}
