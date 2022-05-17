import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { VagasComponent } from './vagas/vagas.component';
import { FormComponent } from './form/form.component';
import { FormVagasComponent } from './form-vagas/form-vagas.component';

const routes: Routes = [
  {path: '', component: VagasComponent},
  {path: 'empresas', component: EmpresasComponent},
  {path: 'novo', component: FormComponent}, 
  {path: 'novo_vaga', component: FormVagasComponent}, 
  {path: 'editar/:id', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
