/**Imports */
import { NgClass, NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@models/alert.model';
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';

/**Services */
import { AreaService } from '@services/inventory/area/area.service';
import { CategoryService } from '@services/inventory/category/category.service';
import { AlertService } from '@services/shared/alert/alert.service';

@Component({
  selector: 'app-area-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    NgClass
  ],
  templateUrl: './area-add.component.html',
  styleUrl: './area-add.component.css'
})
export class AreaAddComponent {
  /**Inputs */
  @Input() areas?: Array<AreaModel>;

  /**Injects */
  private _areaService = inject(AreaService);
  private _categoryService = inject(CategoryService);
  private _alertService = inject(AlertService);

  /**FormGroups */
  formArea: FormGroup = new FormGroup({});

  /**Variables */
  iconSelected?: string;
  iconsArea?: Array<string>;

  /**
   * Método que se ejecuta al iniciar, en este caso nos permite iniciar el formulario.
   */
  async ngOnInit() {
    this.formArea = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      about: new FormControl('', [
        Validators.minLength(0),
        Validators.maxLength(500),
      ]),
    });
    this.iconsArea = await this._areaService.getIconsArea(); // Obtenemos los iconos disponibles para las áreas.
  }

  /**
   * Método que nos permite mantener en una variable el icono seleccionado.
   */
  selectIcon(icon: string) {
    this.iconSelected = icon;
  }

  /**
   * Método que nos permite verificar la información del área y enviar dicha información al servicio.
   */
  async sendArea() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al agregar área, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formArea.valid && this.iconSelected && this.areas) {
      const { name, about } = this.formArea.value; // Obtenemos la información ingresada por el usuario.
      const area: AreaModel = {
        name, about, src: this.iconSelected, categories: []
      };
      const areaSaved = await this._areaService.addArea(this.areas, area);
      if (areaSaved && areaSaved._id) {
        const equipmentCategory: CategoryModel = {
          name: "Equipos",
          about: "Equipos del área: " + name,
          items: [],
          src: 'assets/inventory/category/equipment.svg'
        }
        const reagentsCategory: CategoryModel = {
          name: "Reactivos",
          about: "Reactivos del área: " + name,
          items: [],
          src: 'assets/inventory/category/base.svg'
        }
        await this._categoryService.addCategory(areaSaved._id, areaSaved.categories, equipmentCategory);
        await this._categoryService.addCategory(areaSaved._id, areaSaved.categories, reagentsCategory);
        this.formArea.reset();
        alert = {
          keep: false,
          text: "Área agregada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
