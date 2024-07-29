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
  selector: 'app-item-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgFor,
    NgIf
  ],
  templateUrl: './item-edit.component.html',
  styleUrl: './item-edit.component.css'
})
export class ItemEditComponent {
  /**Inputs */
  @Input() category?: CategoryModel;
  @Input() item?: ItemModel;

  /**FormGroups */
  formItem: FormGroup = new FormGroup({});

  /**Variables */
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
   * Método que nos permite realizar la solicitud de agregar una item a la categoría especifica.
   */
  async sendItem() {
    this._waitingModalService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al agregar item, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formItem.valid && this.category && this.item && this.item._id) {
      const { name, brand, model, serial, inventory, nui, location, manager, stock, formula, presentation, lot, expirationDate, quantity } = this.formItem.value;
      if (name) {
        this.item.name = name;
      }
      if (this.isBrandChecked) {
        this.item.brand = brand;
      }
      if (this.isModelChecked) {
        this.item.model = model;
      }
      if (this.isSerialChecked) {
        this.item.serial = serial;
      }
      if (this.isInventoryChecked) {
        this.item.inventory = inventory;
      }
      if (this.isNUIChecked) {
        this.item.nui = nui;
      }
      if (this.isLocationChecked) {
        this.item.location = location;
      }
      if (this.isManagerChecked) {
        this.item.manager = manager;
      }
      if (this.isStockChecked) {
        this.item.stock = stock;
      }
      if (this.isFormulaChecked) {
        this.item.formula = formula;
      }
      if (this.isPresentationChecked) {
        this.item.presentation = presentation;
      }
      if (this.isLotChecked) {
        this.item.lot = lot;
      }
      if (this.isExpirationDateChecked) {
        this.item.expirationDate = expirationDate;
      }
      if (this.isQuantityChecked) {
        this.item.quantity = quantity;
      }
      if (await this._itemService.updateItem(this.item)) {
        this.formItem.reset();
        const { name } = this.formItem.controls;
        name.setValue(this.item.name)
        alert = {
          keep: false,
          text: "Item modificado con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModalService.setIsWaiting(false);
  }

  /**
   * Método que nos permite solicitar la eliminación de un item.
   */
  async deleteItem() {
    this._waitingModalService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al eliminar item, favor de revisar",
      type: AlertType.Danger
    };
    if (this.category && this.item?._id) {
      if (await this._itemService.deleteItem(this.category, this.item._id)) {
        alert = {
          keep: false,
          text: "item eliminado con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModalService.setIsWaiting(false);
  }
}
