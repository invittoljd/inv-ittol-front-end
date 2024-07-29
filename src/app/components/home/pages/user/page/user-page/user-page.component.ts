/**Imports */
import { Component, inject } from '@angular/core';

/**Components */
import { UserCardsComponent } from "@home-user/components/user-cards/user-cards.component";

/**Models */
import { UserModel } from '@models/user/user.model';

/**Services */
import { AuthService } from '@services/auth/auth.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

/**Components */
import { UserEditComponent } from "@home-user/components/user-edit/user-edit.component";
import { UserAddComponent } from "../../components/user-add/user-add.component";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [UserCardsComponent, UserEditComponent, UserAddComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  /**Variables */
  users?: Array<UserModel>;
  userSelected?: UserModel;

  /**Injects */
  private _authService = inject(AuthService);
  private _waitingModalService = inject(WaitingModalService);

  /**Método que nos permite obtener los usuarios registrados en la base de datos */
  async ngOnInit() {
    this._waitingModalService.setIsWaiting(true);
    this.users = await this._authService.getUsers();
    this._waitingModalService.setIsWaiting(false);
  }

  /**
   * Método que asigna el valor de user a la propiedad userSelected.
   * @param {UserModel} user - UserModel.
   */
  setUserSelected(user: UserModel) {
    this.userSelected = user;
  }
}
