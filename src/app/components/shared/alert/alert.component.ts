/**Imports */
import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

/**Models */
import { AlertModel } from '@models/alert.model';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  /**Inputs */
  @Input() alert?: AlertModel;
}
