import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from '../models/section';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';

@Injectable({
  providedIn: 'root'
})
export class SectionService extends CommonService<Section> {

  protected override baseEndpoint = BASE_ENDPOINT + '/section';
  
  constructor(http: HttpClient) {
    super(http);
  }

  public findByDescription(term: string): Observable<Section[]>{
    return this.http.get<Section[]>(`${this.baseEndpoint}/filtrar/${term}`);
  }
}
