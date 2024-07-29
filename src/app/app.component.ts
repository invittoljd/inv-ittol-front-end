import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**Components */
import { WaitingModalComponent } from '@shared/waiting-modal/waiting-modal.component';

/** */
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WaitingModalComponent
  ],
  providers: [
    CookieService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inv-ittol-front-end';
}
