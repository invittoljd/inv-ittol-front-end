/**Imports */
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';
import { ItemModel } from '@models/inventory/item.model';

/**Components */
import { ItemCardComponent } from '@home-inventory/item/components/item-card/item-card.component';

/**Services */
import { SessionService } from '@services/shared/session/session.service';

@Component({
  selector: 'app-item-cards',
  standalone: true,
  imports: [
    ItemCardComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './item-cards.component.html',
  styleUrl: './item-cards.component.css'
})
export class ItemCardsComponent {
  /**Outputs */
  @Output() itemSelectedEvent = new EventEmitter<ItemModel>();

  /**Inputs */
  @Input() area?: AreaModel;
  @Input() category?: CategoryModel;
  @Input() items?: Array<ItemModel>;

  /**Injects */
  private _sessionService = inject(SessionService);

  /**Método que nos permite ver si el usuario logueado es administrador */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * Método que nos permite ver el item que ha seleccionado un usuario.
   * @param item ItemModel con el item que el usuario ha seleccionado.
   */
  setItemSelected(item: ItemModel) {
    this.itemSelectedEvent.emit(item);
  }
}
