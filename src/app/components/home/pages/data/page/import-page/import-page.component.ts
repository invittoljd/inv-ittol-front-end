/**Imports */
import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import * as XLSX from 'xlsx';

/**Models */
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';
import { AlertModel, AlertType } from '@models/alert.model';
import { ItemModel } from '@models/inventory/item.model';

/**Services */
import { ExportService } from '@services/export/export.service';
import { AlertService } from '@services/shared/alert/alert.service';
import { ImportService } from '@services/import/import.service';

@Component({
  selector: 'app-import-page',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './import-page.component.html',
  styleUrl: './import-page.component.css'
})
export class ImportPageComponent {
  data: any[] = [];

  /**Variables */
  areas?: Array<AreaModel>;
  categories?: Array<CategoryModel>;
  isEquipmentChecked: boolean = true;
  selectedCategoryId?: String;

  /**Injects */
  private _alertService = inject(AlertService);
  private _exportService = inject(ExportService);
  private _importService = inject(ImportService);

  /**Método que se ejecuta al iniciar nuestro componente */
  async ngOnInit() {
    this.getAreas();
  }

  async getAreas() {
    this.areas = await this._exportService.getAreas();
  }

  async onAreaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedAreaIdValue = selectElement.value;
    if (selectedAreaIdValue != "-1") {
      this.categories = await this._exportService.getCategories(selectedAreaIdValue);
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
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    };
    reader.readAsBinaryString(target.files[0]);
  }

  async onSubmit() {
    if (!this.data) {
      const alert: AlertModel = {
        type: AlertType.Danger,
        text: 'Error al cargar datos'
      }
      this._alertService.addAlert(alert);
      return;
    }
    const headers = this.data[0];
    this.data = this.data.slice(1);
    let items;
    if (this.isEquipmentChecked) {
      const equipments: Array<ItemModel> = [];
      for (let index = 0; index < this.data.length; index++) {
        const equipment = this.data[index];
        const equipmentItem: ItemModel = {
          name: equipment[0],
          type: 1,
          inventory: equipment[1],
          brand: equipment[2],
          model: equipment[3],
          serial: equipment[4],
          nui: equipment[5],
          location: equipment[6],
          manager: equipment[7],
        }
        equipments.push(equipmentItem);
      }
      items = await this._importService.sendItems(this.selectedCategoryId, equipments);
    } else {
      const reagents: Array<ItemModel> = [];
      for (let index = 0; index < this.data.length; index++) {
        const reagent = this.data[index];
        const reagentItem: ItemModel = {
          name: reagent[0],
          type: 2,
          inventory: reagent[1],
          brand: reagent[2],
          stock: reagent[3],
          formula: reagent[4],
          presentation: reagent[5],
          lot: reagent[6],
          expirationDate: reagent[7],
          quantity: reagent[8],
        }
        reagents.push(reagentItem);
      }
      items = await this._importService.sendItems(this.selectedCategoryId, reagents);
    }
    if (items) {
      const alert: AlertModel = {
        type: AlertType.Success,
        text: 'Datos almacenados con éxito'
      }
      this._alertService.addAlert(alert);
    } else {
      const alert: AlertModel = {
        type: AlertType.Danger,
        text: 'Error al cargar datos'
      }
      this._alertService.addAlert(alert);
    }
  }
}
