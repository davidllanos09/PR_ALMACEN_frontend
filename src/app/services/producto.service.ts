import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseEndpoint = 'http://localhost:8090/api/product';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  //obtener producto
  public selectProducto(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.baseEndpoint);
  }
  //obtener producto
  public selectProductoID(idProducto: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.baseEndpoint}/${idProducto}`);
  }
  //crear un producto
  public createProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.baseEndpoint, producto, { headers: this.cabecera});
  }
  //editar un producto
  public editProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.baseEndpoint}/${producto.idProducto}`, producto , {headers: this.cabecera});
  }
  //eliminar un producto
  public deleteProducto(idProducto: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${idProducto}`);
  }
}