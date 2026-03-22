import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeparaModel } from '../models/depara-model';
import { ParametroDepara01 } from '../parametros/parametro-depara01';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeparaService {
  apiURL: string = environment.apiURL;
  constructor(private http: HttpClient) {}
  getDeparas(): Observable<DeparaModel[]> {
    return this.http.get<DeparaModel[]>(`${this.apiURL}deparas`);
  }
  getDeparasParametro_01(params: ParametroDepara01): Observable<any> {
    return this.http.post<any>(`${this.apiURL}deparas`, params);
  }
  getDepara(
    id_empresa: number,
    id_local: number,
    id_inventario: number,
    de: number,
    para: number,
  ): Observable<DeparaModel> {
    return this.http.get<DeparaModel>(
      `${this.apiURL}depara/${id_empresa}/${id_local}/${id_inventario}/${de}/${para}`,
    );
  }
  deparaInsert(depara: DeparaModel): Observable<DeparaModel> {
    return this.http.post<DeparaModel>(`${this.apiURL}depara`, depara);
  }
  deparaUpdate(depara: DeparaModel): Observable<DeparaModel> {
    return this.http.put<DeparaModel>(`${this.apiURL}depara`, depara);
  }
  deparaDelete(
    id_empresa: number,
    id_local: number,
    id_inventario: number,
    de: number,
    para: number,
  ): Observable<any> {
    return this.http.delete<any>(
      `${this.apiURL}depara/${id_empresa}/${id_local}/${id_inventario}/${de}/${para}`,
    );
  }
}
