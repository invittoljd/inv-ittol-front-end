/**Imports */
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { RequestModel } from '@models/request/request.model';

/**Services */
import { RequestService } from '@services/request/request.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-request-card-admin',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './request-card-admin.component.html',
  styleUrl: './request-card-admin.component.css'
})
export class RequestCardAdminComponent {
  /**Outputs */
  @Output() requestSelectedEvent = new EventEmitter<RequestModel>();

  /**Inputs */
  @Input() request?: RequestModel;

  /**Variables */
  overlappingRequests?: Array<RequestModel>;
  status?: String;

  /**Injects */
  private _requestService = inject(RequestService);
  private _waitingModalService = inject(WaitingModalService);

  setRequestSelected(request: RequestModel | undefined) {
    if (request) {
      this.requestSelectedEvent.emit(request);
    }
  }

  async setStatus(status: boolean, request: RequestModel | undefined) {
    if (request) {
      if (await this._requestService.updateRequest({ ...request, status })) {
        request.status = status;
      }
    }
  }

  /**Método que nos permite convertir una fecha a cadena para poder ser mostrada al usuario */
  getDate(date: Date | undefined) {
    if (date) {
      return new Date(date).toDateString();
    }
    return 'Sin información';
  }

  /**Método que nos permite revisar si un item esta disponible en la fecha solicitada */
  async checkAvailability() {
    this._waitingModalService.setIsWaiting(true);
    if (this.request) {
      const { requests } = await this._requestService.checkAvailability(this.request);
      if (!requests || requests.length == 0) {
        this.status = "Equipo Disponible";
      } else if (requests) {
        this.status = "Equipo Ocupado";
        this.overlappingRequests = requests;
      } else {
        this.status = "Error al revisar, favor de verificar";
      }
    }
    this._waitingModalService.setIsWaiting(false);
  }
}
