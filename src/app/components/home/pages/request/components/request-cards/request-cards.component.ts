/**Imports */
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { RequestModel } from '@models/request/request.model';

/**Components */
import { RequestCardComponent } from '@home-request/components/request-card/request-card.component';
import { RequestCardAdminComponent } from '@home-request/components/request-card-admin/request-card-admin.component';

/**Services */
import { SessionService } from '@services/shared/session/session.service';

@Component({
  selector: 'app-request-cards',
  standalone: true,
  imports: [
    RequestCardComponent,
    RequestCardAdminComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './request-cards.component.html',
  styleUrl: './request-cards.component.css'
})
export class RequestCardsComponent {
  /**Outputs */
  @Output() requestSelectedEvent = new EventEmitter<RequestModel>();

  /**Inputs */
  @Input() requests?: Array<RequestModel>;

  /**Injects */
  private _sessionService = inject(SessionService);

  /**Método que nos permite saber si el usuario logueado es administrador */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**Método que nos permite saber que solicitud ha sido seleccionada por el usuario */
  setRequestSelected(request: RequestModel) {
    this.requestSelectedEvent.emit(request);
  }

}
