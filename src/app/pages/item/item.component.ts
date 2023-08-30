import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service'; 
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { Producto } from '../../interfaces/producto.interface';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  anio: number = new Date().getFullYear();
  mes: number = new Date().getMonth();
  
  
  producto!: ProductoDescripcion;
  id!: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService ) { }


  
  ngOnInit() {


    this.route.params
      .subscribe(parametros => {
        this.productoService.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcion) => {
        
            this.id = parametros['id'];
            this.producto = producto;
            
        });
          
        
    });

  }

}

