import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';  
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  users: Array<any>
  formulario: FormGroup;
  constructor( private formService : FormService,
                private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario()
  }
  configurarFormulario(){
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      idade: [null, Validators.required],
      dataDenascimento: [null, Validators.required],
      linguagem: [null, Validators.required],
      observacao: [null, Validators.required]
    })
  }
  
  criar(){
    this.formService.criar(this.formulario.value).subscribe(resposta => {
      this.formulario.reset('usuario cadastrado com sucesso');
    })
  }

}

