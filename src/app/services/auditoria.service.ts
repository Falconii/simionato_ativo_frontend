import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AuditoriaModel } from '../models/auditoria-model';
import { ParametroAuditoria01 } from '../parametros/parametro-auditoria01';

@Injectable({
providedIn: 'root',
})
export class AuditoriaService 
{
apiURL: string = environment.apiURL;
constructor(private http: HttpClient) {}
	getAuditorias(): Observable<AuditoriaModel[]> {
	const url = new URL('auditoria/auditorias', this.apiURL).toString();
		return this.http.get<AuditoriaModel[]>(`${url}`);
	}
	getAuditoriasParametro_01(params: ParametroAuditoria01): Observable<AuditoriaModel[]> {
	const url = new URL('auditoria/auditorias', this.apiURL).toString();
		return this.http.post<AuditoriaModel[]>(url,params);
	}
	getAuditoria(id:number): Observable<AuditoriaModel> { 
 	const url = new URL('auditoria', this.apiURL).toString();
		return this.http.get<AuditoriaModel >(`${url}/${id}`);
	}
	auditoriaInsert(auditoria:AuditoriaModel):Observable<AuditoriaModel> { 
	const url = new URL('auditoria', this.apiURL).toString();
		return this.http.post<AuditoriaModel>(url, auditoria);
	}
	auditoriaUpdate(auditoria:AuditoriaModel):Observable<AuditoriaModel> { 
	const url = new URL('auditoria', this.apiURL).toString();
		return this.http.put<AuditoriaModel>(url,auditoria);
	}
	auditoriaDelete(id:number):Observable<any>  { 
 	const url = new URL('auditoria', this.apiURL).toString();
		return this.http.delete<any>(`${url}/${id}`);
	}
}