import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vagas } from './vagas';
import { Empresas } from './empresas';
import { take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly API = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getVagas(){
    return this.http.get<Vagas[]>(`${this.API}/vagas`).pipe(
      tap(console.log)
    )
  }
  getEmpresas(){
    return this.http.get<Empresas[]>(`${this.API}/empresas`).pipe(
      take(1),
      tap(console.log)
    )
  }

  postEmpresas(empresa: Empresas[]){
    return this.http.post<Empresas[]>(`${this.API}/empresas`, empresa).pipe(
      tap(console.log)
    )
  }
  postVagas(vaga: Vagas[]){
    return this.http.post<Vagas[]>(`${this.API}/vagas`, vaga).pipe(
      tap(console.log)
    )
  }

  patchEmpresas(empresa: any){
    return this.http.patch<Empresas[]>(`${this.API}/${empresa.id_empresas}`, empresa).pipe(
      take(1),
      tap(console.log)
    )
  }

}
