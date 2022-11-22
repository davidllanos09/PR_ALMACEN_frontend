import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rack } from '../models/rack';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';

@Injectable({
  providedIn: 'root'
})
export class RackService extends CommonService<Rack> {

  protected override baseEndpoint = BASE_ENDPOINT + '/rack';
  
  constructor(http: HttpClient) {
    super(http);
  }

  public findByDescription(term: string): Observable<Rack[]>{
    return this.http.get<Rack[]>(`${this.baseEndpoint}/filtrar/${term}`);
  }
  
  public modify(rack:Rack): Observable<Rack> {
    return this.http.put<Rack>(`${this.baseEndpoint}/${rack.idRack}`, rack,
      { headers: this.cabeceras });
  }

  /*ASIGNA LAS SECCIONES A ALMACEN */
  addRack(rack: Rack): Observable<Rack>{
    return this.http.put<Rack>(`${this.baseEndpoint}/${rack.idRack}/assign-rack`,
     
     {headers: this.cabeceras});
  }

  /*BORRA SECCIONES DEL ALMACEN */
  deleteRack(rack: Rack): Observable<Rack> {
    return this.http.put<Rack>(`${this.baseEndpoint}/${rack.idRack}/eliminar-rack`,
    rack,
    {headers: this.cabeceras});
  }
}
