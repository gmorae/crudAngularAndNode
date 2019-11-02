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
  modalRef: BsModalRef;
  formulario: FormGroup;
  editUser: any
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

  openModal(template: TemplateRef<any>, users) {
    this.modalRef = this.modalService.show(template);
    this.editUser = users
  }

  listarUser() {
    this.userService.listarUser().subscribe(users => {
      this.users = users;
    }, err => {
      console.log(err)
    })
  }

  list(id: number) {
    this.userService.listId(id).subscribe(users => {
      this.editUser = users
    }, err => {
      console.log(err)
    })
  }

  editar(id: number) {
    this.userService.criar(this.formulario.value).subscribe(resposta => {
      this.formulario.reset('usuario editado com sucesso');
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
