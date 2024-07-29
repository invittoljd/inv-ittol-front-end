import { Component, Input } from '@angular/core';

/**Models */
import { RequestModel } from '@models/request/request.model';

/**Messages */
import { RequestMessagesComponent } from '@home-request/components/request-messages/request-messages.component';

@Component({
  selector: 'app-request-warning-messages',
  standalone: true,
  imports: [
    RequestMessagesComponent
  ],
  templateUrl: './request-warning-messages.component.html',
  styleUrl: './request-warning-messages.component.css'
})
export class RequestWarningMessagesComponent {
  /**Inputs */
  @Input() request?: RequestModel;
}
