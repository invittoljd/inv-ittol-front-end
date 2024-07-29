/**Imports */
import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**Environments */
import { environment } from '@environments/environment';

/**Models */
import { UserModel } from '@models/user/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  /**Outputs */
  @Output() userSelectedEvent = new EventEmitter<UserModel>();
  /**Inputs */
  @Input() user?: UserModel;

  /**Método que nos devuelve el tipo de usuario de los administradores */
  getAdminType() {
    return environment.typeAdmin;
  }

  /**
   * El método `setUserSelected` emite un evento cuando se le asigna una nueva usuario.
   * @param {UserModel | undefined} user - El parámetro `user` es de tipo `UserModel`.
   */
  setUserSelected(user: UserModel | undefined) {
    if (user) {
      this.userSelectedEvent.emit(user);
    }
  }
}
