/**Imports */
import { Injectable } from '@angular/core';

/**Environment */
import { environment } from '@environments/environment';

/**Models */
import { UserModel } from '@models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  /**Variables */
  private user?: UserModel;

  /**
   * Set que nos permite cambiar el valor de nuestra variable user.
   * @param user UserModel con el valor a asignar.
   */
  setUser(user: UserModel): void {
    this.user = user;
  }

  /**
   * Get que nos permite obtener el valor actual de nuestra variable user.
   * @returns el usuario actual de la variable user.
   */
  getUser(): UserModel | undefined {
    return this.user;
  }

  /**
   * Método que nos permite ver si el usuario es administrador o no.
   * @returns boolean, true en caso de que el usuario sea de tipo administrador, false en caso contrario.
   */
  isAdmin(): boolean {
    return this.getUser()?.type == environment.typeAdmin;
  }

  /**
   * Método que nos permite ver si el usuario es invitado en tipo o no.
   * @returns boolean, true en caso de que el usuario sea de tipo invito, false en caso contrario.
   */
  isGuest(): boolean {
    return this.getUser()?.type == 0;
  }
}
