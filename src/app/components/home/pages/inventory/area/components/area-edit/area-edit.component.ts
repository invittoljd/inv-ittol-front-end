/**Imports */
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@models/alert.model';
import { AreaModel } from '@models/inventory/area.model';

/**Services */
import { AreaService } from '@services/inventory/area/area.service';
import { AlertService } from '@services/shared/alert/alert.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-area-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor,
    NgClass
  ],
  templateUrl: './area-edit.component.html',
  styleUrl: './area-edit.component.css'
})
export class AreaEditComponent {
  /**FormGroups */
  formArea: FormGroup = new FormGroup({});

  /**Variables */
  editIcon: Boolean = false;
  iconSelected?: string;
  iconsArea?: Array<string>;

  /**Inputs */
  @Input() areas?: Array<AreaModel>;
  @Input() area?: AreaModel;

  /**Injects */
  private _areaService = inject(AreaService);
  private _alertService = inject(AlertService);
  private _waitingModalService = inject(WaitingModalService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['area'] && this.area) {
      const {name, about} = this.formArea.controls;
      name.setValue(this.area.name);
      about.setValue(this.area.about);
    }
  }

  /**
   * Método que se ejecuta al crear nuestro componente, en este caso se inicializa el formulario y se obtienen los iconos.
   */
  ngOnInit(): void {
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
    this.iconsArea = this._areaService.getIconsArea(); // Obtenemos los iconos de área.
  }

  /**
   * Método que nos permite cambiar al valor contrario actual el booleano editIcon.
   */
  changeEditIcon(): void {
    this.editIcon = !this.editIcon;
  }

  /**
   * Método que nos permite mantener en una variable el icono seleccionado.
   * @param icon string del icono a seleccionar.
   */
  selectIcon(icon: string) {
    this.iconSelected = icon;
  }

  /**
   * Método que nos permite mandar la solicitud de actualizar la información del área.
   */
  async updateArea() {
    this._waitingModalService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al modificar área, favor de revisar",
      type: AlertType.Danger
    };
    if (this.area) {
      const { name, about } = this.formArea.value;
      if (name) {
        this.area.name = name;
      }
      if (about) {
        this.area.about = about;
      }
      if (this.editIcon && this.iconSelected) {
        this.area.src = this.iconSelected;
      }
      if (await this._areaService.updateArea(this.area)) {
        alert = {
          keep: false,
          text: "Área modificada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModalService.setIsWaiting(false);
  }

  /**
   * Método que nos permite mandar la solicitud para eliminar un área.
   */
  async deleteArea() {
    this._waitingModalService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al eliminar Área, favor de revisar",
      type: AlertType.Danger
    };
    if (this.areas && this.area?._id) {
      if (await this._areaService.deleteArea(this.areas, this.area._id)) {
        alert = {
          keep: false,
          text: "Área eliminada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModalService.setIsWaiting(false);
  }
}
