import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//'src/app/model/medico/medico';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  cpf=''
  senha=''

 constructor(
  private HttpClient: HttpClient,
  private rota: Router
  ) { }
  
 
 connectionLogin(){
    return this.HttpClient.post<{erro:false, mensagem:''}>('http://localhost:8000/logar',
    {cpf: this.cpf, senha: this.senha})
    .subscribe(
      (res) => {
        if(res.erro){
          console.log(res.mensagem)
        }
        else{
          if(res.mensagem.search(/Funcionário/)!=-1){
            this.rota.navigate(['telainicialfunc'])
          }else if(res.mensagem.search(/Médico/)!=-1){
            this.rota.navigate(['telainicialmed'])
          }else if(res.mensagem.search(/Administrador/)!=-1){
            this.rota.navigate(['telainicialadm']);
          }
        }
      }
    )
    
  }

  ngOnInit(): void {
  }

}
