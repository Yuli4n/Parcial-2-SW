import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './curso';

import { environment } from '../../environments/environment';
import { cursoDetail } from './cursoDetail';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCursos(): Observable<cursoDetail[]> {
    return this.http.get<cursoDetail[]>(this.apiUrl);
  }

  getCurso(id:String): Observable<cursoDetail>{
    return this.http.get<cursoDetail>(this.apiUrl + '/'+id);
  }
  
}
