/**Imports */
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertModel, AlertType } from '@models/alert.model';

/**Models */
import { RequestModel } from '@models/request/request.model';

/**Components */
import { RequestWarningMessagesComponent } from '@home-request/components/request-warning-messages/request-warning-messages.component';

/**Services */
import { AlertService } from '@services/shared/alert/alert.service';
import { RequestService } from '@services/request/request.service';

@Component({
  selector: 'app-request-warning',
  standalone: true,
  imports: [
    RequestWarningMessagesComponent, 
    ReactiveFormsModule
  ],
  templateUrl: './request-warning.component.html',
  styleUrl: './request-warning.component.css'
})
export class RequestWarningComponent {
  /**Inputs */
  @Input() request?: RequestModel;

  /**FormGroups */
  formMessageNew: FormGroup = new FormGroup({});

  /**Injects */
  private _requestService = inject(RequestService);
  private _alertService = inject(AlertService);

  /**Método que se ejecuta al iniciar nuestro componente */
  ngOnInit(): void {
    this.formMessageNew = new FormGroup({
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
      ])
    });
  }

  async sendMessage() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al enviar mensaje, favor de revisar",
      type: AlertType.Danger
    };
    if (this.request && this.formMessageNew.valid) {
      const { message } = this.formMessageNew.value;
      if (await this._requestService.addMessage(this.request, message)) {
        this.formMessageNew.reset();
        alert = {
          keep: false,
          text: "Mensaje enviado con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
