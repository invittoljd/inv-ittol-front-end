/**Imports */
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@models/alert.model';
import { CategoryModel } from '@models/inventory/category.model';
import { ItemModel } from '@models/inventory/item.model';

/**Services */
import { AlertService } from '@services/shared/alert/alert.service';
import { ItemService } from '@services/inventory/item/item.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-item-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgFor,
    NgIf
  ],
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {
  /**Inputs */
  @Input() category?: CategoryModel;

  /**FormGroups */
  formItem: FormGroup = new FormGroup({});

  /**Variables */
  isEquipment: boolean = true;

  isBrandChecked: boolean = false;
  isInventoryChecked: boolean = false;

  //Equipos
  isModelChecked: boolean = false;
  isSerialChecked: boolean = false;
  isNUIChecked: boolean = false;
  isLocationChecked: boolean = false;
  isManagerChecked: boolean = false;

  //Reactivos
  isStockChecked: boolean = false;
  isFormulaChecked: boolean = false;
  isPresentationChecked: boolean = false;
  isLotChecked: boolean = false;
  isExpirationDateChecked: boolean = false;
  isQuantityChecked: boolean = false;

  /**Injects */
  private _itemService = inject(ItemService);
  private _alertService = inject(AlertService);
  private _waitingModalService = inject(WaitingModalService);

  /**
   * Método que se inicializa cuando el componente es iniciado.
   */
  ngOnInit(): void {
    this.formItem = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      brand: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      model: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      serial: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      inventory: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      nui: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      location: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      manager: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      stock: new FormControl('', [
        Validators.min(1),
      ]),
      formula: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      presentation: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      lot: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      expirationDate: new FormControl('', []),
      quantity: new FormControl('', [
        Validators.min(0),
      ]),
    });
  }

  /**
   * Método que nos permite realizar la solicitud de agregar un item a la categoría.
   */
  async sendItem() {
    this._waitingModalService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al agregar item, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formItem.valid && this.category && this.category._id) {
      const { name, brand, model, serial, inventory, nui, location, manager, stock, formula, presentation, lot, expirationDate, quantity } = this.formItem.value;
      const item: ItemModel = {
        name, type: this.isEquipment ? 1 : 2, brand, model, serial, inventory, nui, location, manager, stock, formula, presentation, lot, expirationDate, quantity
      };
      const added = await this._itemService.addItem(this.category._id, this.category.items, item);
      if (added) {
        this.formItem.reset();
        alert = {
          keep: false,
          text: "Item agregado con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModalService.setIsWaiting(false);
  }
}
