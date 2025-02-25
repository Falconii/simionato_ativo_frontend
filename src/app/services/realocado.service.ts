import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RealocadoModel } from '../models/realocado-model';
import { ParametroRealocado01 } from '../parametros/parametro-realocado01';

@Injectable({
providedIn: 'root',
})
export class RealocadoService 
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getRealocados(): Observable<RealocadoModel[]> {
		return this.http.get<RealocadoModel[]>(`${this.apiURL}Realocados`);
	}
	getRealocadosParametro_01(params: ParametroRealocado01): Observable<RealocadoModel[]> {
		return this.http.post<RealocadoModel[]>(`${this.apiURL}realocados`,params);
	}
	getRealocado(id_empresa:number,id_local:number,id_inventario:number,id_realocado:number,id_transferido:number): Observable<RealocadoModel> { 
 		return this.http.get<RealocadoModel >(`${ this.apiURL}realocado/${id_empresa}/${id_local}/${id_inventario}/${id_realocado}/${id_transferido}`);
	}
	realocadoInsert(realocado:RealocadoModel):Observable<RealocadoModel> { 
		return this.http.post<RealocadoModel>(`${this.apiURL}realocado`, realocado);
	}
	realocadoUpdate(realocado:RealocadoModel):Observable<RealocadoModel> { 
		return this.http.put<RealocadoModel>(`${this.apiURL}realocado`,realocado);
	}
	realocadoDelete(id_empresa:number,id_local:number,id_inventario:number,id_realocado:number,id_transferido:number):Observable<any>  { 
 		return this.http.delete<any>(`${this.apiURL}realocado/${id_empresa}/${id_local}/${id_inventario}/${id_realocado}/${id_transferido}`);
	}
}