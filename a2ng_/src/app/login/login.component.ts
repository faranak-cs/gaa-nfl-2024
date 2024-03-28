import { Component, inject } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = { email: 'thomas.devine@atu.ie', password: 'letmein' };
  msg: String = '';

  authService = inject(AuthService);

  // Handlers

  handleSubmit(event: Event) {
    event.preventDefault();
    //
    this.authService.login(this.user).subscribe((res) => {
      console.log(res);
    });
  }
}
