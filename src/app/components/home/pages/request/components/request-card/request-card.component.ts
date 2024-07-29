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

  getDate(date: Date | undefined) {
    if (date) {
      return new Date(date).toDateString();
    }
    return 'Sin información';
  }
}