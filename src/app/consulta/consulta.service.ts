import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  unsubscribe() {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  getConsultas() {
    return this.http.get(environment.apiUrl + "consulta");
  }
}
