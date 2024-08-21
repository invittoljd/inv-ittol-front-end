/**Imports */
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges, inject } from '@angular/core';
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
  isEquipment?: boolean;

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
  * Método que se ejecuta cada vez que cambian las entradas.
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category']) {
      this.updateIsEquipment();
    }
  }

  /**
   * Método para actualizar la variable isEquipment.
   */
  private updateIsEquipment(): void {
    this.isEquipment = this.category?.name == 'Equipos';
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
      let { name, brand, model, serial, inventory, nui, location, manager, stock, formula, presentation, lot, expirationDate, quantity } = this.formItem.value;
      // Verifica cada campo según el estado del checkbox correspondiente
      if (!this.isBrandChecked) {
        brand = undefined;
      }
      if (!this.isModelChecked) {
        model = undefined;
      }
      if (!this.isSerialChecked) {
        serial = undefined;
      }
      if (!this.isInventoryChecked) {
        inventory = undefined;
      }
      if (!this.isNUIChecked) {
        nui = undefined;
      }
      if (!this.isLocationChecked) {
        location = undefined;
      }
      if (!this.isManagerChecked) {
        manager = undefined;
      }
      if (!this.isStockChecked) {
        stock = undefined;
      }
      if (!this.isFormulaChecked) {
        formula = undefined;
      }
      if (!this.isPresentationChecked) {
        presentation = undefined;
      }
      if (!this.isLotChecked) {
        lot = undefined;
      }
      if (!this.isExpirationDateChecked) {
        expirationDate = undefined;
      }
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

  resetCheckedFlags() {
    this.isBrandChecked = false;
    this.isModelChecked = false;
    this.isSerialChecked = false;
    this.isInventoryChecked = false;
    this.isNUIChecked = false;
    this.isLocationChecked = false;
    this.isManagerChecked = false;
    this.isStockChecked = false;
    this.isFormulaChecked = false;
    this.isPresentationChecked = false;
    this.isLotChecked = false;
    this.isExpirationDateChecked = false;
  }
}
