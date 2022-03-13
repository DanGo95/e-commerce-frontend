import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos!: Producto[]
  categorias: string[] = [];
  categoriasId: string[] = [];

  constructor( private productoService: ProductoService, private categoriaService: CategoriaService ) { }

  ngOnInit(): void {

    
    this.categoriaService.obtenerCategorias().subscribe(resp => {
      if (resp) {
        resp.forEach(element => {
          this.categorias.push(element.nombre);
          this.categoriasId.push(element._id);
        });

        this.categoriasId.forEach(categoria => {
          this.productoService.obtenerProductosCategoria(categoria).subscribe(resp => console.log(resp));
        })
      }

    });


    
    // this.productoService.getProductos().subscribe((resp) => {
    //   this.productos = resp.productos;
    //   console.log(this.productos);
    // });
  }

}
