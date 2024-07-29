import { Component, Input, inject } from '@angular/core';

/**Models */
import { AlertModel, AlertType } from '@models/alert.model';
import { RequestModel } from '@models/request/request.model';

/**Services */
import { AlertService } from '@services/shared/alert/alert.service';
import { RequestService } from '@services/request/request.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-request-delete',
  standalone: true,
  imports: [],
  templateUrl: './request-delete.component.html',
  styleUrl: './request-delete.component.css'
})
export class RequestDeleteComponent {
  /**Inputs */
  @Input() requests?: Array<RequestModel>;
  @Input() request?: RequestModel;

  /**Injects */
  private _requestService = inject(RequestService);
  private _alertService = inject(AlertService);
  private _waitingModelService = inject(WaitingModalService);

  /**Método que nos permite solicitar la eliminación de una solicitud */
  async deleteRequest() {
    this._waitingModelService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al eliminar Solicitud, favor de revisar",
      type: AlertType.Danger
    };
    if (this.requests && this.request?._id) {
      if (await this._requestService.deleteRequest(this.requests, this.request._id)) {
        alert = {
          keep: false,
          text: "Solicitud eliminada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModelService.setIsWaiting(false);
  }
}
