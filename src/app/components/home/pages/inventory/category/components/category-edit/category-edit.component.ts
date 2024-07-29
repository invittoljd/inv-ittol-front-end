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
  selector: 'app-category-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor,
    NgClass
  ],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  /**FormGroups */
  formCategory: FormGroup = new FormGroup({});

  /**Variables */
  editIcon: Boolean = false;
  iconSelected?: string;
  iconsCategories?: Array<string>;

  /**Inputs */
  @Input() area?: AreaModel;
  @Input() category?: CategoryModel;

  /**Injects */
  private _categoryService = inject(CategoryService);
  private _alertService = inject(AlertService);
  private _waitingModalService = inject(WaitingModalService);

  /**
   * Método que se ejecuta al iniciar el componente, para este caso se crean las validaciones del formulario, y 
   * se obtienen los iconos disponibles para las categorías.
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

    this.iconsCategories = this._categoryService.getIconsCategory();
  }

  /**
   * Método que nos permite cambiar el editIcon por el valor contrario.
   */
  changeEditIcon(): void {
    this.editIcon = !this.editIcon;
  }

  /**
   * Método que nos permite guardar en una variable el icono que ha seleccionado un usuario.
   * @param icon string con el icono seleccionado.
   */
  selectIcon(icon: string) {
    this.iconSelected = icon;
  }

  /**
   * Método que nos permite solicitar la actualización se la categoría.
   */
  async updateCategory() {
    this._waitingModalService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al modificar la Categoría, favor de revisar",
      type: AlertType.Danger
    };
    if (this.category) {
      const { name, about } = this.formCategory.value;
      if (name) {
        this.category.name = name;
      }
      if (about) {
        this.category.about = about;
      }
      if (this.editIcon && this.iconSelected) {
        this.category.src = this.iconSelected;
      }
      if (await this._categoryService.updateCategory(this.category)) {
        alert = {
          keep: false,
          text: "Categoría modificada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModalService.setIsWaiting(false);
  }

  /**
   * Método que nos permite solicitar la eliminación de una categoría.
   */
  async deleteCategory() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al eliminar Categoría, favor de revisar",
      type: AlertType.Danger
    };
    if (this.area && this.category?._id) {
      const deleted = await this._categoryService.deleteCategory(this.area.categories, this.category._id);
      if (deleted) {
        alert = {
          keep: false,
          text: "Categoría eliminada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
