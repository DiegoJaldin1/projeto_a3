import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastromedadm',
  templateUrl: './cadastromedadm.component.html',
  styleUrls: ['./cadastromedadm.component.css']
})
export class CadastromedadmComponent implements OnInit {

  nome=''
  cpf=''
  especialidade=''
  crm=''
  dt_nascimento=''
  senha=''
  acesso='1'
  tipo_acesso='Médico'


  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionCadastromed(){
    return this.HttpClient.post<{erro:false, mensagem:''}>('http://localhost:8000/cadastro-medico', 
    {nome: this.nome, cpf: this.cpf, crm: this.crm, especialidade: this.especialidade, dt_nascimento: this.dt_nascimento, senha: this.senha, acesso:this.acesso,tipo_acesso: this.tipo_acesso})
    .subscribe(
      (res) => {
        if(res.erro){
          console.log(res.mensagem)
        }
        else{
          window.location.href = window.location.href;
          console.log('Cadastrado com sucesso!')
        }
      }
    )
  }

  connectionInicio(){
    this.rota.navigate(['telainicialadm'])
  }

  connectionProntuario(){
    this.rota.navigate(['prontuarioadm']);
  }

  connectionCadastrofunc(){
    this.rota.navigate(['cadastrofuncadm'])
  }

  connectionCadastropac(){
    this.rota.navigate(['cadastropacadm'])
  }


  ngOnInit(): void {
  }

}
