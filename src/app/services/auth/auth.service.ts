/**Imports */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

/**Services */
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from '@services/shared/session/session.service';

/**Environment */
import { environment } from '@environments/environment';

/**Models */
import { UserModel } from '@models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**Variables */
  private apiUrl = `${environment.url}/api/auth`;

  /**Injects */
  private http = inject(HttpClient);
  private _cookieService = inject(CookieService);
  private _sessionService = inject(SessionService);
  // private _router = inject(Router);

  /**
   * Método que nos permite administrar la forma en que se mostrarán los errores en caso de que se active la opción en el entorno.
   * @param title string con el titulo de donde se manda el error.
   * @param error string con el error.
   */
  private showError(title: string, error: any) {
    if (environment.showErrors) {
      console.log('Error en el archivo: auth.service.ts');
      console.log(title, '\n\t', error);
    }
  }

  /**
   * Método que nos permite mandar las credenciales ingresadas por el usuario y asignar el token de respuesta en las cookies.
   * @param username string con el nombre del usuario.
   * @param password string con el password del usuario.
   * @returns boolean, true en caso de ser satisfactorio, en caso contrario false.
   */
  async logIn(username: string, password: string): Promise<boolean> {
    try {
      const user: UserModel = {
        username, password, type: -1
      }
      const response: any = await firstValueFrom(this.http.post(this.apiUrl + "/login", { user, keep: false }));
      if (response) {
        const { message, token } = response;
        if (token) {
          this._cookieService.set(environment.tokenName, token, undefined, '/');
          return true;
        }
        this.showError('Error al hacer el login:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return false;
  }

  /**
   * Método que nos permite eliminar todas las cookies, permitiendo eliminar el acceso también del usuario y toda 
   * información temporal.
   */
  logOut(): void {
    this._cookieService.deleteAll('/');
  }

  /**Método que nos permite obtener la información del usuario que esta logueado actualmente gracias a su token */
  async getUserInfo() {
    const token = this._cookieService.get(environment.tokenName);
    if (token) {
      const response: any = await firstValueFrom(this.http.get(this.apiUrl + "/me"));
      const { user } = response;
      this._sessionService.setUser(user);
      if (response) {
        return user;
      }
    }
    return undefined;
  }

  /**
  * Get que nos permite obtener todos los usuarios de la base de datos.
  * @returns Promise<Array<UserModel>>
  */
  async getUsers(): Promise<Array<UserModel>> {
    try {
      const response: any = await this.http.get(this.apiUrl).toPromise();
      if (response) {
        const { message, users } = response;
        if (users) {
          return users;
        }
        this.showError('Error al obtener usuarios: ', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return [];
  }

  /**
  * Update que nos permite solicitar la actualizaciónd de un usuario a la base de datos.
  * @returns Promise<UserModel>
  */
  async updateUser(users: Array<UserModel>, user: UserModel): Promise<UserModel | undefined> {
    try {
      const response: any = await this.http.put(this.apiUrl + "/" + user._id, { user }).toPromise();
      if (response) {
        const { message, user } = response;
        if (user) {
          return user;
        }
        this.showError('Error al actualizar usuario: ', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }
  /**
  * Método que nos permite realizar la solicitud para la eliminación de un user.
  * @param users contiene la copia del arreglo de users que tiene la página.
  * @param user_id string con el id del user a eliminar.
  * @returns UserModel del user eliminada.
  */
  async deleteUser(users: Array<UserModel>, user_id: String): Promise<UserModel | undefined> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + user_id).toPromise();
      if (response) {
        const { message, user } = response;
        if (user) {
          const index = users.findIndex((user: UserModel) => user._id === user_id);
          if (index !== -1) {
            users.splice(index, 1);
          }
          return user;
        }
        this.showError('Error al eliminar el usuario:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }
  /**
     * Método que nos permite solicitar una adición de un área a la base de datos.
     * @param users Array<UserModel> copia de las áreas en la base de datos antes de la solicitud.
     * @param user UserModel que se solicitará adicionar.
     * @returns UserModel adicionada, o undefined en caso de algún error con la solicitud.
     */
  async signIn(users: Array<UserModel>, user: UserModel): Promise<UserModel | undefined> {
    try {
      const response: any = await firstValueFrom(this.http.post(this.apiUrl + "/signIn", { user }));
      if (response) {
        const { user: userSaved } = response;
        if (userSaved) {
          users.push(userSaved);
          return userSaved;
        }
        this.showError('Error al crear usuario:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }
}
