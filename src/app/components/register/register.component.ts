import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {User} from "../../interfaces/auth";
import {passwordMatchValidator} from "../../shared/password-match.directive";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

  constructor(private _fb: FormBuilder,
              private _authService: AuthService,
              private _router: Router,
              private _messageService: MessageService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  get email() {
    return this.registerForm.controls['email'];
  }
  get fullName() {
    return this.registerForm.controls['fullName'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  initForm() {
    this.registerForm= this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validators: passwordMatchValidator
    })
  }

  onSubmit() {
    const user = this.registerForm.value;
    delete user. confirmPassword;
    console.log(user);
    this._authService.addUser(user).subscribe({
      next: user => {
        console.log(user)
        this._messageService.add({severity: "success", summary:"Success", detail: "User register successfully"});
        this._router.navigate(['/login']).then();
      },
      error: err => {
        this._messageService.add({severity: "error", summary: "Error", detail: "Something is wrong"});
      }
    })
  }
}
