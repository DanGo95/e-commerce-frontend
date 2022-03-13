import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080';

  constructor( private http: HttpClient, private router: Router ) { }

  login( usuario: Usuario) {
    return this.http.post(`${this.url}/api/auth/login`, usuario);
  }

  signup( usuario: Usuario ) {
    return this.http.post(`${this.url}/registro`, usuario);
  }

  setSession(token: string) {
    localStorage.setItem('id_token', token);
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    const token = localStorage.getItem('id_token');
    if (!token) {
      return false;
    }
    return true;
  }
}
