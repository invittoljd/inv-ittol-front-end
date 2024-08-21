/**Imports */
import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**Models */
import { RequestModel } from '@models/request/request.model';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
  /**Outputs */
  @Output() requestSelectedEvent = new EventEmitter<RequestModel>();

  /**Inputs */
  @Input() request?: RequestModel;

  setRequestSelected(request: RequestModel | undefined) {
    if (request) {
      this.requestSelectedEvent.emit(request);
    }
  }

  // Formateamos la fecha en un formato que se desee
  getDate(date: Date | undefined): string {
    if (date) {
      return new Date(date).toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Esto es para usar el formato 24 horas
      });
    }
    return 'Sin información';
  }
}