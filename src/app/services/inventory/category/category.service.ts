/**Imports */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

/**Environment */
import { environment } from '@environments/environment';

/**Models */
import { CategoryModel } from '@models/inventory/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  /**Variables */
  private apiUrl = `${environment.url}/api/inventory/category`;

  /**Injects */
  private http = inject(HttpClient);

  /**
   * Método que nos permite administrar la forma en que se mostrarán los errores en caso de que se active la opción en el entorno.
   * @param title string con el titulo de donde se manda el error.
   * @param error string con el error.
   */
  private showError(title: string, error: any) {
    if (environment.showErrors) {
      console.log('Error en el archivo: category.service.ts');
      console.log(title, '\n\t', error);
    }
  }

  /**
   * Método que nos permite obtener los iconos disponibles para la categoría.
   * @returns 
   */
  getIconsCategory(): Array<string> {
    return [
      'assets/inventory/category/inventory.svg',
      'assets/inventory/category/equipment.svg',
      'assets/inventory/category/acid.svg',
      'assets/inventory/category/base.svg',
      'assets/inventory/category/radioactive.svg',
    ];;
  }

  /**
   * Método que nos permite obtener una categoría almacenada en la base de datos.
   * @param _id string con el id de la categoría a buscar.
   * @returns la categoría almacenada, undefined en caso contrario.s
   */
  async getCategory(_id: String): Promise<CategoryModel | undefined> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/" + _id).toPromise();
      if (response) {
        const { message, category } = response;
        if (category) {
          return category;
        }
        this.showError('Error al obtener la categoría:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Método que nos permite solicitar la eliminación de una categoría.
   * @param categories Array<CategoryModel> una copia de las categorías almacenadas en la base de datos.
   * @param category_id string con el id de la categoría a eliminar.
   * @returns CategoryModel de la categoría eliminada.
   */
  async deleteCategory(categories: Array<CategoryModel>, category_id: String): Promise<CategoryModel | undefined> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + category_id).toPromise();
      if (response) {
        const { message, category } = response;
        if (category) {
          const index = categories.findIndex((category: CategoryModel) => category._id === category_id);
          if (index !== -1) {
            categories.splice(index, 1);
          }
          return category;
        }
        this.showError('Error al eliminar la categoría:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Método que nos permite obtener solicitar la adición de una categoría a la base de datos.
   * @param area_id string con el id del área al que se va a adicionar dicha categoría.
   * @param categories Array<CategoryModel> copia local de las categorías almacenadas en la base de datos.
   * @param category CategoryModel de la categoría a adicionar.
   * @returns CategoryModel de la categoría adicionada.
   */
  async addCategory(area_id: String, categories: Array<CategoryModel>, category: CategoryModel): Promise<CategoryModel | undefined> {
    try {
      const response: any = await firstValueFrom(this.http.post(this.apiUrl, { area_id, category }));
      if (response) {
        const { category: categorySaved } = response;
        if (categorySaved) {
          categories.push(categorySaved);
          return categorySaved;
        }
        this.showError('Error al crear categoría:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Método que nos permite solicitar la actualización de información de una categoría.
   * @param updateCategory CategoryModel con la información actualizada de la categoría.
   * @returns CategoryModel con la categoría actualizada, o en caso contrario undefined.
   */
  async updateCategory(updateCategory: CategoryModel): Promise<CategoryModel | undefined> {
    try {
      const response: any = await firstValueFrom(this.http.put(this.apiUrl + "/" + updateCategory._id, { category: updateCategory }));
      if (response) {
        const { message, category } = response;
        if (category) {
          return category;
        }
        this.showError('Error al editar categoría:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }
}
