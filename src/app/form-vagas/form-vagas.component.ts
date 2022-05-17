import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form-vagas',
  templateUrl: './form-vagas.component.html',
  styleUrls: ['./form-vagas.component.css']
})
export class FormVagasComponent implements OnInit {

  form!: FormGroup
  submmited: boolean = false

  constructor(private fb: FormBuilder, private service: AppService ) { }  

  ngOnInit(): void {
    this.form = this.fb.group({
      id_vagas: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2000)]],
      titulo: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2000)]],
      salario: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2000)]],
      descricao: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2000)]],
      empresas_id: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2000)]]
    })
  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

  onSubmit(){
    this.submmited = true
    if(this.form.valid){
      console.log('submit')
      console.log(this.form.value)
      this.service.postVagas(this.form.value).subscribe(
        success => console.log('sucesso'),
        error => console.log(error),
        () => console.log('chegou aqui')
      )  
    }
  }

  onCancel(){
    console.log('cancel')
    this.form.reset()
  }
}
