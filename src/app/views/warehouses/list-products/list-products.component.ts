import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/load-scripts.service';
import {Producto} from 'src/app/models/producto';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/producto.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  productos: Producto[];
  producto: Producto = new Producto();

  error:any;
  constructor(private _LoadScripts:LoadScriptsService, 
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute) { 
_LoadScripts.Load(["register_section"])
}
public eliminar(w: Producto): void{
  Swal.fire({
    title: 'Cuidado:',
    text: `¿Seguro que desea eliminar a ${w.name} ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0A457F',
    cancelButtonColor: '#86b9eb',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.value) {
      this.service.delete(w.productID).subscribe(() => {
        Swal.fire('Eliminado:', `${w.name} eliminado con éxito`, 'success');
        this.router.navigate(['/listar_productos']);
        window.location.reload();
      });
    }
  });
}
  /*cards = [
    {
      title: 'Doritos',
      units: '15',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },
    {
      title: 'Club Social',
      units: '5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },
    {
      title: 'Pipocas',
      units: '12',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content'
    },
    {
      title: 'Nachos Mex',
      units: '25',
      description: 'Description'
    },
  ];*/
  
  sections = [
    {
      title: 'Section 1',
      type: 'Congelador',
      quantity_shelves: '15',
      description: 'Description'
    },
    {
      title: 'Section 2',
      type: 'Congelador',
      quantity_shelves: '15',
      description: 'Description'
    },
    {
      title: 'Section 3',
      type: 'Congelador',
      quantity_shelves: '15',
      description: 'Description'
    },
    {
      title: 'Section 4',
      type: 'Congelador',
      quantity_shelves: '15',
      description: 'Description'
    },
  ];
  ngOnInit(): void {
    this.service.list().subscribe(productos => this.productos = productos);
  }

}
