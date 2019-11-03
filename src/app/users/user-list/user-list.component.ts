import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormService } from '../../form.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<any> = new Array()
  user : any
  modalRef: BsModalRef;
  formulario: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private userService: FormService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder) {
    this.bsConfig = Object.assign({}, {containerClass: 'theme-blue'})

  }

  ngOnInit() {
    this.listarUser()
    this.configurarFormulario()
  }
  
  
  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      idade: [null, Validators.required],
      dataDenascimento: [null, Validators.required],
      linguagem: [null, Validators.required],
      observacao: [null, Validators.required]
    })
  }
  
  openModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template);
    this.userService.listId(id).subscribe(user => {
      console.log('Usuario editado => ' + id)
      console.log(user)
      this.user = user;
    }, err => {
      console.log(err)
    })
  }

  listarUser() {
    this.userService.listarUser().subscribe(users => {
      this.users = users;
    }, err => {
      console.log(err)
    })
  }

  list(id: number){
    
  }

  editar(id: number, data: any) {
    console.log('id => ' + id)
    this.userService.editar(id, this.formulario.value).subscribe(resposta => {
      this.modalRef.hide()
    })
  }
  delete(id: number) {
    if (confirm('Certeza que deseja excluir o usuario ?')) {
      this.userService.deletar(id).subscribe(
        res => window.location.href = ''
      )
    }
  }

}
