import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppService } from '../app.service';
import { Empresas } from '../empresas';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  empresas$!: Observable<Empresas[]>

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(){
    this.empresas$ = this.service.getEmpresas().pipe(
      map(result => result.registros)
    )
  }

}
