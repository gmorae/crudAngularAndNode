import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  base_url = 'http://localhost:8080/user'

  listarUser() : Observable<any>{
    return this.http.get(this.base_url)
  }
  criar(usuario: any){
    return this.http.post(this.base_url, usuario)
  }

  deletar(id: number){
    return this.http.delete(this.base_url+'/'+id)
  } 
}
