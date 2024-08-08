/**Imports */
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';

/**Models */
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';

/**Services */
import { ExportService } from '@services/export/export.service';
import { AreaService } from '@services/inventory/area/area.service';

@Component({
  selector: 'app-export-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './export-page.component.html',
  styleUrl: './export-page.component.css'
})
export class ExportPageComponent {
  /**Variables */
  areas?: Array<AreaModel>;
  categories?: Array<CategoryModel>;
  isEquipmentChecked: boolean = true;

  link?: String;

  /**Injects */
  private _exportService = inject(ExportService);
  private _areaService = inject(AreaService);

  /**Método que se ejecuta al iniciar nuestro componente */
  async ngOnInit() {
    this.getAreas();
  }

  async getAreas() {
    this.areas = await this._areaService.getAreas();
    this.categories = [];
  }
  async onAreaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedAreaIdValue = selectElement.value;
    if (selectedAreaIdValue != "-1") {
      const area = await this._areaService.getArea(selectedAreaIdValue);
      this.categories = area?.categories;
    }
  }

  async onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategoryId = selectElement.value;
    if (selectedCategoryId != "-1") {
      this.isEquipmentChecked ?
        await this._exportService.exportItemsToExcel(selectedCategoryId, 1)
        :
        await this._exportService.exportItemsToExcel(selectedCategoryId, 2);
    }
  }
}
