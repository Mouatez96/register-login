import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  constructor(private _fb: FormBuilder,
              private _authService: AuthService,
              private _router: Router,
              private _messageService: MessageService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm= this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  onSubmit() {
    const email = this.loginForm.value['email']
    const password = this.loginForm.value['password']

    this._authService.getUserByEmail(email).subscribe({
      next: (users) => {

        if(users.length > 0 && users[0].password === password) {
          console.log(this.loginForm.value)
          sessionStorage.setItem('email', email);
          this._router.navigate(['/home']).then();
        }else {
          this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is wrong' });
        }

      },
      error: (error) => {
        this._messageService.add({ severity: 'error', summary: 'Error', detail: 'something went wrong' });
      }
    })
  }
}
