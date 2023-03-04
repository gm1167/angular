import { HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  _url = 'https://reqres.in/api/users?page=2';
  constructor(private http: HttpClient) {
  }
  obtenerPersonas(){
    let header = new HttpHeaders().set('Type-content', 'application/json')
    return this.http.get<Usuarios>(this._url, {
      headers: header
    });
  }
}
