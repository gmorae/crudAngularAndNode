import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [FormCadastroComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
