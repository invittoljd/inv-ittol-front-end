/**Imports */
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import * as XLSX from 'xlsx';

/**Models */
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';
import { AlertModel, AlertType } from '@models/alert.model';
import { ItemModel } from '@models/inventory/item.model';

/**Services */
import { AlertService } from '@services/shared/alert/alert.service';
import { ImportService } from '@services/import/import.service';
import { AreaService } from '@services/inventory/area/area.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';
import { CategoryService } from '@services/inventory/category/category.service';
import { ItemService } from '@services/inventory/item/item.service';

@Component({
  selector: 'app-import-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './import-page.component.html',
  styleUrl: './import-page.component.css'
})
export class ImportPageComponent {
  /**Variables for tables */
  headers: Array<any> = [];
  dataRaw: Array<ItemModel> = [];
  dataNew: Array<ItemModel> = [];
  dataUpdate: Array<ItemModel> = [];

  /**Variables */
  areas?: Array<AreaModel>;
  categories?: Array<CategoryModel>;
  isEquipmentChecked: boolean = true;
  selectedCategoryId?: String;

  /**Injects */
  private _waitingModalService = inject(WaitingModalService);
  private _alertService = inject(AlertService);
  private _areaService = inject(AreaService);
  private _categoryService = inject(CategoryService);
  private _itemService = inject(ItemService);

  /**Método que se ejecuta al iniciar nuestro componente */
  async ngOnInit() {
    this.getAreas();
  }

  async getAreas() {
    this.areas = await this._areaService.getAreas();
    this.dataNew = [];
    this.dataUpdate = [];
    this.categories = [];
  }

  async onAreaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedAreaIdValue = selectElement.value;
    if (selectedAreaIdValue != "-1") {
      const area = await this._areaService.getArea(selectedAreaIdValue);
      this.categories = area?.categories;
      this.dataNew = [];
      this.dataUpdate = [];
    }
  }

  async onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategoryId = selectElement.value;
    if (selectedCategoryId != "-1") {
      this.selectedCategoryId = selectedCategoryId;
    }
  }

  onFileChange(event: any): void {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      const alert: AlertModel = {
        type: AlertType.Danger,
        text: 'No se puede usar múltiples archivos'
      }
      this._alertService.addAlert(alert);
      return;
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      this._waitingModalService.setIsWaiting(true);
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      const data: Array<Array<string>> = XLSX.utils.sheet_to_json(ws, { header: 1 });
      if (data.length > 2) {
        this.headers = data[0];
        this.dataRaw = this.convertToItems(data.slice(1), (this.isEquipmentChecked ? 1 : 2));
      } else {
        this.headers = [];
        this.dataRaw = [];
      }
      this._waitingModalService.setIsWaiting(false);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  async onSubmit() {
    this._waitingModalService.setIsWaiting(true);
    if (!this.dataRaw || !this.headers) {
      const alert: AlertModel = {
        type: AlertType.Danger,
        text: 'Error al cargar datos'
      }
      this._alertService.addAlert(alert);
      return;
    }

    const items = await this.getItems(this.isEquipmentChecked ? 1 : 2);
    if (!items) {
      const alert: AlertModel = {
        type: AlertType.Danger,
        text: 'Error al cargar datos'
      }
      this._alertService.addAlert(alert);
      return;
    }

    this.dataNew = [];
    this.dataUpdate = [];

    if ((this.isEquipmentChecked && this.headers.length == 8) || (!this.isEquipmentChecked && this.headers.length == 9)) {
      this.dataRaw.forEach((item: ItemModel) => {
        let finded: string = '';
        for (let index = 0; index < items.length; index++) {
          const itemSaved = items[index];
          if (item.inventory == itemSaved.inventory || item.nui == itemSaved.nui) {
            if (itemSaved._id) {
              finded = itemSaved._id;
              break;
            }
          }
        }
        if (finded != '') {
          this.dataUpdate.push({ ...item, _id: finded });
        } else {
          this.dataNew.push(item);
        }
      });
    }
    this._waitingModalService.setIsWaiting(false);
  }

  async getItems(type: Number) {
    if (this.selectedCategoryId) {
      const category = await this._categoryService.getCategory(this.selectedCategoryId);
      if (category) {
        const { items } = category;
        return items;
      }
    }
    return undefined;
  }

  convertToItems(dataRaw: Array<Array<string>>, type: number) {
    const items: Array<ItemModel> = [];
    for (let index = 0; index < dataRaw.length; index++) {
      const element = dataRaw[index];
      if (type == 1) {
        const [name, inventory, brand, model, serial, nui, location, manager] = element;
        const item: ItemModel = { name, inventory, brand, model, serial, nui, location, manager, type }
        items.push(item);
      } else {
        const [name, inventory, brand, stock, formula, presentation, lot, expirationDate, quantity] = element;
        const item: ItemModel = { name, inventory, brand, formula, presentation, lot, type }
        const datePrb = new Date(expirationDate)
        const quantityPrb = Number(quantity)
        const stockPrb = Number(stock);
        if (expirationDate && datePrb) {
          item.expirationDate = datePrb;
        }
        if (quantity && quantityPrb) {
          item.quantity = quantityPrb;
        }
        if (stock && stockPrb) {
          item.stock = stockPrb;
        }
        items.push(item);
      }
    }
    return items;
  }

  async updateAll() {
    this._waitingModalService.setIsWaiting(true);
    let okUpdate: Array<ItemModel | undefined> = [];
    if (this.selectedCategoryId) {
      await this.dataUpdate.map(async (item) => {
        const resultItem = await this._itemService.updateItem(item);
        okUpdate.push(resultItem);
      });
      if (okUpdate) {
        const alert: AlertModel = {
          type: AlertType.Success,
          text: 'Operación exitosa'
        }
        this._alertService.addAlert(alert);
      }
    } else {
      const alert: AlertModel = {
        type: AlertType.Danger,
        text: 'Error al cargar datos, favor de notificar, no cerrar esta ventana ni recargar el sistema'
      }
      console.log(okUpdate)
      this._alertService.addAlert(alert);
    }
    this._waitingModalService.setIsWaiting(false);
  }
  async createAll() {
    this._waitingModalService.setIsWaiting(true);
    if (this.selectedCategoryId && this.dataNew) {
      for (let index = 0; index < this.dataNew.length; index++) {
        const item = this.dataNew[index];
        console.log('------------------------------')
        console.log('Mandando item: ')
        console.log(item)
        const resultItem = await this._itemService.addItem(this.selectedCategoryId, [], item);
        console.log('Recibiendo respuesta:')
        console.log(resultItem)
        
      }
      const alert: AlertModel = {
        type: AlertType.Success,
        text: 'Operación exitosa'
      }
      this._alertService.addAlert(alert);
    } else {
      const alert: AlertModel = {
        type: AlertType.Danger,
        text: 'Error al cargar datos, favor de notificar, no cerrar esta ventana ni recargar el sistema'
      }
      this._alertService.addAlert(alert);
    }
    this._waitingModalService.setIsWaiting(false);
  }
}
