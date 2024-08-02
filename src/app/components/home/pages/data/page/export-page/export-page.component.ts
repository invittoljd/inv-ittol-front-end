/**Imports */
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';

/**Models */
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';

/**Exports */
import { ExportService } from '@services/export/export.service';

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
      this.isEquipmentChecked ?
        this.link = await this._exportService.getLinkFileEquipments(selectedCategoryId)
        :
        this.link = await this._exportService.getLinkFileReagents(selectedCategoryId);
    }
  }
}
