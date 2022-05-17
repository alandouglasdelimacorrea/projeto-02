import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form!: FormGroup
  submmited: boolean = false

  constructor(private fb: FormBuilder, private service: AppService, private route: ActivatedRoute) { }  
  
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const id = params['id']
      console.log(id)
      
    })
    this.form = this.fb.group({
      id_empresas: [null],
      nome: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(2000)]]
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
      if(this.form.value.id_empresas){
        this.service.patchEmpresas(this.form.value).subscribe(
          success => console.log('sucesso'),
          error => console.log(error),
          () => console.log('chegou aqui'))
      }else{
        this.service.postEmpresas(this.form.value).subscribe(
          success => console.log('sucesso'),
          error => console.log(error),
          () => console.log('chegou aqui')
        )  
      }
    }
  }

  onCancel(){
    console.log('cancel')
    this.form.reset()
  }

}
