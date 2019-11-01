import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCadastroComponent } from '../form/form-cadastro/form-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: FormCadastroComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
