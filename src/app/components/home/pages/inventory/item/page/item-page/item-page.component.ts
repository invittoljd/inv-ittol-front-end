/**Imports */
import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**Models */
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';
import { ItemModel } from '@models/inventory/item.model';

/**Services */
import { AreaService } from '@services/inventory/area/area.service';
import { CategoryService } from '@services/inventory/category/category.service';
import { SessionService } from '@services/shared/session/session.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

/**Components */
import { ItemCardsComponent } from '@home-inventory/item/components/item-cards/item-cards.component';
import { ItemAddComponent } from '@home-inventory/item/components/item-add/item-add.component';
import { ItemEditComponent } from "@home-inventory/item/components/item-edit/item-edit.component";
import { ItemShowComponent } from "@home-inventory/item/components/item-show/item-show.component";
import { ItemRequestComponent } from "@home-inventory/item/components/item-request/item-request.component";

@Component({
  selector: 'app-items-page',
  standalone: true,
  imports: [
    ItemCardsComponent,
    ItemAddComponent,
    // ItemShowEquipmentComponent,
    // ItemEditEquipmentComponent,
    // ItemRequestEquipmentComponent,
    NgIf,
    ItemEditComponent,
    ItemShowComponent,
    ItemRequestComponent
  ],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {
  /**Variables */
  area?: AreaModel;
  category?: CategoryModel;
  itemSelected?: ItemModel;

  items?: Array<ItemModel>;

  /**Injects */
  private _sessionService = inject(SessionService);
  private _activatedRoute = inject(ActivatedRoute);
  private _areasService = inject(AreaService);
  private _categoriesService = inject(CategoryService);
  private _waitingModalService = inject(WaitingModalService);

  /**
   * Método que nos permite verificar si el usuario logueado es administrador.
   * @returns true en caso de que sea administrador, false en caso contrario.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * Método que nos permite verificar si el usuario logueado es invitado.
   * @returns true en caso de que sea invitado, false en caso contrario.
   */
  isGuest() {
    return this._sessionService.isGuest();
  }

  /**
   * Método que se ejecuta al iniciar nuestro componente, para este caso lo ocupamos para obtener la información del área y 
   * categoría en donde se encuentran nuestros items.
   */
  async ngOnInit() {
    this._activatedRoute.paramMap.subscribe(async (params) => {
      this._waitingModalService.setIsWaiting(true);
      const area_id: String = '' + params.get('area_id');
      const category_id: String = '' + params.get('category_id');
      this.area = await this._areasService.getArea(area_id);
      if (this.area) {
        this.category = await this._categoriesService.getCategory(category_id);
        if (this.category) {
          this.items = this.category.items;
        }
      }
      this._waitingModalService.setIsWaiting(false);
    });
  }

  /**Set que nos permite asignar el item seleccionado. */
  setItemSelected(item: ItemModel) {
    this.itemSelected = item;
  }
}
