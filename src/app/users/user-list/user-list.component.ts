import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<any> = new Array()

  constructor(private userService : FormService) { }
  
  ngOnInit() {
    this.listarUser()
  }

  listarUser(){
    this.userService.listarUser().subscribe(users=>{
      this.users = users;
    }, err => {
      console.log(err)
    })
  }

  delete(id: number){
    if(confirm('Certeza que deseja excluir o usuario ?')){
      this.userService.deletar(id).subscribe(
        res => window.location.href = ''
      )
    }
  }

}
