/**Imports */
import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**Models */
import { UserModel } from '@models/user/user.model';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: 'app-user-cards',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent
  ],
  templateUrl: './user-cards.component.html',
  styleUrl: './user-cards.component.css'
})
export class UserCardsComponent {
  /**Outputs */
  @Output() userSelectedEvent = new EventEmitter<UserModel>();
  
  /**Imports */
  @Input() users?: Array<UserModel>;

  /**
   * El método `setUserSelected` emite un evento cuando se le asigna una nueva user.
   * @param {UserModel} user - El parámetro `user` es de tipo `UserModel`.
   */
  setUserSelected(user: UserModel) {
    this.userSelectedEvent.emit(user);
  }
}
