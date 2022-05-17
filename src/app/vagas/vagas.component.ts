import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AppService } from '../app.service';
import { Vagas } from '../vagas';
 
@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vagas$!: Observable<Vagas[]>

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(){
    this.vagas$ = this.service.getVagas().pipe(
      map(result => result.registros)
    )
  }
  onEdit(id: number){
    this.router.navigate(['editar', id], {relativeTo: this.route})
  }
}
