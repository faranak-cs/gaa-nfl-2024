import { Component, EventEmitter, Output, inject } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // @Output() updateNav = new EventEmitter<string>();

  // User object
  user: User = { email: '', password: '' };

  // FormGroup
  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  // Inject services
  constructor(private authService: AuthService, private router: Router) {}

  // Handlers

  handleSubmit(event: Event) {
    // Avoid refresh
    event.preventDefault();

    // Set values
    this.user.email = this.userForm.value.email ?? '';
    this.user.password = this.userForm.value.password ?? '';

    // POST Request Service
    this.authService.login(this.user).subscribe((res) => {
      if (res.status === 200) {
        // Store cookie
        localStorage.setItem('IsLoggedIn', JSON.stringify(res.body));

        // Set isLoggedIn
        this.authService.isLoggedIn = true;

        // Route to Admin page
        this.router.navigateByUrl('/admin');
      }
    });
  }

  // setUpdateNav(value: string) {
  //   this.updateNav.emit(value);
  // }
}
