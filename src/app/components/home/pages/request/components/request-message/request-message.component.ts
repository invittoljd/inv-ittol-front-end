/**Imports */
import { Component, Input } from '@angular/core';

/**Models */
import { MessageModel } from '@models/request/message.model';

@Component({
  selector: 'app-request-message',
  standalone: true,
  imports: [],
  templateUrl: './request-message.component.html',
  styleUrl: './request-message.component.css'
})
export class RequestMessageComponent {
  /**Inputs */
  @Input() message?: MessageModel;
  @Input() accordionParent: String = "";
}
