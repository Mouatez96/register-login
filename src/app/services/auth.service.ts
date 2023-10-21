import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/auth";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string= 'http://localhost:3000';
  constructor(private _http: HttpClient) { }

  getUserByEmail(email: string): Observable<User[]> {
    return this._http.get<User[]>(`${this.apiUrl}/users?email=${email}`);
  }
}
