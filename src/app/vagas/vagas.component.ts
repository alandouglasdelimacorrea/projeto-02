import { Component, OnInit } from '@angular/core';
import { Observable, tap, map, empty, catchError } from 'rxjs';
import { AppService } from '../app.service';
import { Vagas } from '../vagas';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vagas$!: Observable<Vagas[]>

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(){
    this.vagas$ = this.service.getVagas().pipe(
      map(result => result.registros)
    )
  }

  
}
