import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === "admin") {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn
  }
}
