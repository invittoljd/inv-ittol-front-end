/**Imports */
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**Components */
import { AlertsComponent } from '@shared/alerts/alerts.component';
import { NavBarComponent } from '@shared/nav-bar/nav-bar.component';

/**Models */
import { AlertModel } from '@models/alert.model';

/**Services */
import { AuthService } from '@services/auth/auth.service';
import { AlertService } from '@services/shared/alert/alert.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    AlertsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /**Variables */
  alerts?: Array<AlertModel>;

  /**Injects */
  private _authService = inject(AuthService);
  private _alertService = inject(AlertService);
  private _waitingModelService = inject(WaitingModalService);

  /**Método que se ejecuta al iniciar el componente, es importante mencionar que se usa para verificar el token del usuario. */
  async ngOnInit() {
    this._waitingModelService.setIsWaiting(true);
    await this._authService.getUserInfo();
    this.alerts = this._alertService.getAlerts();
    this._waitingModelService.setIsWaiting(false);
  }
}
