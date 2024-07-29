/**Imports */
import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { ItemModel } from '@models/inventory/item.model';

/**Services */
import { SessionService } from '@services/shared/session/session.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  /**Outputs */
  @Output() itemSelectedEvent = new EventEmitter<ItemModel>();

  /**Inputs */
  @Input() item?: ItemModel;

  /**Injects */
  private _sessionService = inject(SessionService);

  /**
   * Método que nos permite saber si el usuario logueado es administrador.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * Método que nos permite saber si el usuario logueado es invitado.
   */
  isGuest() {
    return this._sessionService.isGuest();
  }
  /**
   * Método que nos permite avisar si un usuario ha seleccionado un item;
   */
  setItemSelected(item: ItemModel | undefined) {
    if (item) {
      this.itemSelectedEvent.emit(item);
    }
  }
}
