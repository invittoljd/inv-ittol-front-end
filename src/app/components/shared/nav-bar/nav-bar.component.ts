/**Imports */
import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

/**Services */
import { SessionService } from '@services/shared/session/session.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  /**Injects */
  private _sessionService = inject(SessionService);

  /**
   * Método que nos permite obtener el nivel de acceso del usuario actual.
   */
  isAdmin(): boolean {
    return this._sessionService.isAdmin();
  }

  /**
   * Método que nos permite obtener el nivel de acceso del usuario actual.
   */
  isGuest(): boolean {
    return this._sessionService.isGuest();
  }
}
