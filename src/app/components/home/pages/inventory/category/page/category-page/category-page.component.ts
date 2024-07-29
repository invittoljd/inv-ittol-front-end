/**Imports */
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

/**Models */
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';

/**Services */
import { AreaService } from '@services/inventory/area/area.service';
import { SessionService } from '@services/shared/session/session.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

/**Components */
import { CategoryCardsComponent } from '@home-inventory/category/components/category-cards/category-cards.component';
import { CategoryAddComponent } from '@home-inventory/category/components/category-add/category-add.component';
import { CategoryEditComponent } from '@home-inventory/category/components/category-edit/category-edit.component';
import { CategoryShowComponent } from '@home-inventory/category/components/category-show/category-show.component';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [
    CategoryCardsComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryShowComponent,
    NgIf
  ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  /**Variables */
  area?: AreaModel;
  categorySelected?: CategoryModel;
  categories?: Array<CategoryModel>;

  /**Injects */
  private _sessionService = inject(SessionService);
  private _activatedRoute = inject(ActivatedRoute);
  private _areasService = inject(AreaService);
  private _waitingModalService = inject(WaitingModalService);

  /**
   * Método que nos permite obtener el nivel de acceso del usuario actual.
   */
  isAdmin(): boolean {
    return this._sessionService.isAdmin();
  }

  /**
   * Método que se ejecuta el iniciar nuestro componente, para este caso se obtiene el id del área.
   */
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(async (params) => {
      this._waitingModalService.setIsWaiting(true);
      const _id: String = '' + params.get('area_id');
      this.area = await this._areasService.getArea(_id);
      this.categories = this.area?.categories;
      this._waitingModalService.setIsWaiting(false);
    });
  }

  /**
   * Método que asigna el valor de una categoría a la propiedad categorySelected.
   * @param {CategoryModel} category - CategoryModel.
   */
  setCategorySelected(category: CategoryModel) {
    this.categorySelected = category;
  }
}
