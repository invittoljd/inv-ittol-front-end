/**Imports */
import { NgIf } from '@angular/common';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
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
      ]),
      quantity: new FormControl(0, []),
    }, { validators: this.dateRangeValidator('startDate', 'endDate') });
  }

  // Detectamos los cambios del input
  ngOnChanges(changes: SimpleChanges) {
    if (changes['item'] && this.item) {
      this.updateDateValidators();
    }
  }

  // Modificamos las fechas para ver si son requeridas
  updateDateValidators() {
    const startDateControl = this.formRequest.get('startDate');
    const endDateControl = this.formRequest.get('endDate');
    const quantityControl = this.formRequest.get('quantity');

    if (this.item?.type === 1) {
      startDateControl?.setValidators([Validators.required]);
      endDateControl?.setValidators([Validators.required]);
      quantityControl?.clearValidators();
    } else {
      startDateControl?.clearValidators();
      endDateControl?.clearValidators();
      quantityControl?.setValidators([Validators.required, Validators.min(1)]);
    }

    startDateControl?.updateValueAndValidity();
    endDateControl?.updateValueAndValidity();
  }

  // Validador personalizado para asegurar que endDate es posterior a startDate
  dateRangeValidator(startDateKey: string, endDateKey: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const startDate = control.get(startDateKey)?.value;
      const endDate = control.get(endDateKey)?.value;

      if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
        return { dateRangeInvalid: true };
      }
      return null;
    };
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
    console.log(this.formRequest)
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
