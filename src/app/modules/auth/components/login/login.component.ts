import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from 'src/app/modules/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor (
    private fb : FormBuilder,
    public router : Router ,
		public authService : AuthService,
		private userService : UserService
  ) {
		this.loginForm = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		})
	}
	
	ngOnInit(): void {
		
	}

	submitLoginForm() {
		const body = JSON.stringify(this.loginForm.value);
		this.authService.login(body).subscribe((res:any) => {
			console.log(res);
			localStorage?.setItem('userToken', res.token);
			this.userService.userToken.next(res.token)
			this.router.navigate(['/']);
		})
	}
}
