import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vagas } from './vagas';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly VagasAPI = 'http://localhost:3000/vagas'

  constructor(private http: HttpClient) { }

  getVagas(){
    return this.http.get<Vagas[]>(this.VagasAPI).pipe(
      tap(console.log)
    )
  }
}
