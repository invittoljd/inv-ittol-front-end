/**Imports */
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Components */
import { AlertComponent } from '@shared/alert/alert.component';

/**Models */
import { AlertModel, AlertType } from '@models/alert.model';
import { Router } from '@angular/router';

/**Services */
import { AuthService } from '@services/auth/auth.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    AlertComponent,
    ReactiveFormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  /**FormGroups */
  formLogIn: FormGroup = new FormGroup({});

  /**Variables */
  alert?: AlertModel;

  /**Injects */
  private _router = inject(Router);
  private _authService = inject(AuthService);
  private _waitingModalService = inject(WaitingModalService);

  /**
   * Función que se ejecutará al iniciar nuestro componente, para este caso genera los aspectos básicos de nuestro formulario,
   * como el valor inicial, las validaciones de campos, etc.
   * Es importante mencionar que antes hace un logOut de verificación, para eliminar todas las cookies.
   */
  ngOnInit(): void {
    this._authService.logOut();

    this.formLogIn = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    });
  }

  /**
   * Nos permite realizar las acciones para validar los datos ingresados por el usuario con el fin de iniciar sesión, en caso
   * de ser correctos y validados por el backend se intenta ingresar a la ruta de navegación, es importante mencionar que 
   * a pesar de ingresar por la ruta es necesario pasar el middleware, el cual se encargará de verificar nuevamente nuestras 
   * credenciales.
   */
  async login(): Promise<void> {
    this._waitingModalService.setIsWaiting(true);
    if (this.formLogIn.valid) {
      const { user, password } = this.formLogIn.value;
      if (await this._authService.logIn(user, password)) {
        this._router.navigate(['/', 'home']);
      } else {
        this.alert = {
          type: AlertType.Danger,
          text: 'Favor de verificar los datos.',
          keep: true
        }
      }
    } else {
      this.alert = {
        type: AlertType.Warning,
        text: 'Datos no válidos, longitud minima de 4 caracteres y máxima de 20, favor de revisar.',
        keep: true
      }
    }
    this._waitingModalService.setIsWaiting(false);
  }
}
