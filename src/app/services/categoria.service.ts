import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = 'http://localhost:8080';

  constructor( private http: HttpClient, private router: Router ) { }

  obtenerCategorias() {
    return this.http.get<Categoria[]>(`${this.url}/api/categorias`);
  }

}
