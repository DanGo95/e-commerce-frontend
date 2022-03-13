import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() productos!: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(producto: Producto) {
    if (producto._id) {
      console.log(producto);
    }
  }

}
