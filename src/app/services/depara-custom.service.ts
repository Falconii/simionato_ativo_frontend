import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeparaModel } from '../models/depara-model';
import { ParametroDepara01 } from '../parametros/parametro-depara01';
import { environment } from 'src/environments/environment';
import { ParametroSubstituirAtivo } from '../parametros/parametro-substituir-ativo';
import { ParametroDeparaAtivo } from '../parametros/parametro-depara-ativo';

@Injectable({
  providedIn: 'root',
})
export class DeparaCustomService {
  apiURL: string = environment.apiURL;
  constructor(private http: HttpClient) {}

  substituirAtivo(params: ParametroSubstituirAtivo): Observable<any> {
    return this.http.post<any>(`${this.apiURL}substituirativo`, params);
  }

  deparaativo(params: ParametroDeparaAtivo): Observable<any> {
    return this.http.post<any>(`${this.apiURL}deparaativo`, params);
  }
}
