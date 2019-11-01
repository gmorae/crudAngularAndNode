import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';


@NgModule({
  declarations: [FormCadastroComponent],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
