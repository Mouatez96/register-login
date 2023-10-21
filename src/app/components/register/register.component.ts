import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

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

  initForm() {
    this.registerForm= this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ''
    })
  }

  onSubmit() {

  }
}
