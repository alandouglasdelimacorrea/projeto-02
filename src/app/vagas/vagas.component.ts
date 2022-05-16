import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Vagas } from '../vagas';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vagas$!: Observable<Vagas[]>;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.listarVagas()
  }
  listarVagas(){
    this.vagas$ = this.service.getVagas()
  }

}
