import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Productos } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'http://localhost:8080';

  constructor( private http: HttpClient, private router: Router ) { }

  get params() {
    return {
      cantidad: 4,
      page: 0
    }
  }

  getProductos() {
    return this.http.get<Productos>(`${this.url}/api/productos`);
  }

  obtenerProductosCategoria(id: string) {
    return this.http.get(`${this.url}/api/productos/categoria/${id}`, {params: this.params});
  }

}
