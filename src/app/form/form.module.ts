import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormRoutingModule } from './form-routing.module';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [FormCadastroComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    BsDatepickerModule.forRoot()
  ]
})
export class FormModule { }
