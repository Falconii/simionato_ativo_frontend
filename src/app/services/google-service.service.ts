import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FotoModel } from '../models/foto-model';
import { ParametroFoto01 } from '../parametros/parametro-foto01';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleServiceService {

  apiURL: string = environment.apiURL;

  apiURLOauth: string = environment.apiOAuth2;

  constructor(private http: HttpClient) {}

  getoauth2(): Observable<any> {
		return this.http.get<any>(`${this.apiURLOauth}auth/google`);
	}

}
