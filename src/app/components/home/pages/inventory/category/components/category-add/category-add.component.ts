/**Imports */
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@models/alert.model';
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';

/**Services */
import { CategoryService } from '@services/inventory/category/category.service';
import { AlertService } from '@services/shared/alert/alert.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor,
    NgClass
  ],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {
  /**Inputs */
  @Input() area?: AreaModel;

  /**Variables */
  iconSelected?: string;
  iconsCategories?: Array<string>;

  /**FormGroups */
  formCategory: FormGroup = new FormGroup({});

  /**Injects */
  private _categoryService = inject(CategoryService);
  private _alertService = inject(AlertService);
  private _waitingModalService = inject(WaitingModalService);

  /**
   * Método que se inicializa cuando el componente es iniciado.
   */
  ngOnInit(): void {
    this.formCategory = new FormGroup({
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

    this.iconsCategories = this._categoryService.getIconsCategory(); // Obtenemos los iconos para las categorías.
  }

  /**
   * Método que nos permite seleccionar el icono que ha seleccionado el usuario.
   * @param icon string con el icono seleccionado.
   */
  selectIcon(icon: string) {
    this.iconSelected = icon;
  }

  /**
   * Método que nos permite realizar la solicitud de agregar una categoría al área especifica.
   */
  async sendCategory() {
    this._waitingModalService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al agregar Categoría, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formCategory.valid && this.iconSelected && this.area && this.area._id && this.iconSelected) {
      const { name, about } = this.formCategory.value;
      const category: CategoryModel = {
        name, about, src: this.iconSelected, items: []
      };
      const added = await this._categoryService.addCategory(this.area._id, this.area.categories, category);
      if (added) {
        this.formCategory.reset();
        alert = {
          keep: false,
          text: "Categoría agregada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModalService.setIsWaiting(false);
  }
}
