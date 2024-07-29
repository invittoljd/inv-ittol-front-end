/**Imports */
import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

/**Models */
import { AlertModel } from '@models/alert.model';

/**Components */
import { AlertComponent } from '@shared/alert/alert.component';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    AlertComponent,
    NgFor
  ],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  /**Inputs */
  @Input() alerts?: Array<AlertModel>;

  /**
   * Nos permite refrescar la página actual, permitiendo recargar toda la información.
   */
  refreshPage(): void {
    window.location.reload();
  }
}
