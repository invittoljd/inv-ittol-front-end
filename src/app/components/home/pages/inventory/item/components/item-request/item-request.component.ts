/**Imports */
import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@models/alert.model';
import { ItemModel } from '@models/inventory/item.model';
import { RequestModel } from '@models/request/request.model';

/**Services */
import { RequestService } from '@services/request/request.service';
import { AlertService } from '@services/shared/alert/alert.service';
import { SessionService } from '@services/shared/session/session.service';

@Component({
  selector: 'app-item-request',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './item-request.component.html',
  styleUrl: './item-request.component.css'
})
export class ItemRequestComponent {
  /**Inputs */
  @Input() item?: ItemModel;

  /**Injects */
  private _requestService = inject(RequestService);
  private _alertService = inject(AlertService);
  private _sessionService = inject(SessionService);

  /**FormGroups */
  formRequest: FormGroup = new FormGroup({});

  /**Variables */
  isUserNameChecked: boolean = false;

  /**
   * Método que se ejecuta al iniciar, en este caso nos permite iniciar el formulario.
   */
  async ngOnInit() {
    this.formRequest = new FormGroup({
      username: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      name: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      about: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      startDate: new FormControl('', [
      ]),
      endDate: new FormControl('', [
        this.dateRangeValidator
      ]),
      quantity: new FormControl('', [
        Validators.min(1)
      ]),
    });
  }

  // Validador personalizado para asegurar que endDate es posterior a startDate
  dateRangeValidator(group: AbstractControl): ValidationErrors | null {
    const startDate = group.get('startDate')?.value;
    const endDate = group.get('endDate')?.value;
    if (!startDate || !endDate) {
      return null; // No validar si una de las fechas no está establecida
    }
    return endDate > startDate ? null : { dateRangeInvalid: true };
  }

  /**
   * Método que nos retorna si el usuario logueado es administrador.
   * @returns true en caso de que sea administrador, false en caso contrario.
   */
  isAdmin(): boolean {
    return this._sessionService.isAdmin();
  }

  /**
   * Método que nos permite verificar la información de la solicitud y enviar dicha información al servicio.
   */
  async sendRequest() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al solicitar, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formRequest.valid && this.item && this.item._id) {
      const { username, about, startDate, endDate, quantity } = this.formRequest.value; // Obtenemos la información ingresada por el usuario.
      const request: RequestModel = {
        author: username, about, startDate, endDate, quantity
      };
      if (await this._requestService.addRequest(request, this.item._id)) {
        this.formRequest.reset();
        alert = {
          keep: false,
          text: "Item solicitado con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
