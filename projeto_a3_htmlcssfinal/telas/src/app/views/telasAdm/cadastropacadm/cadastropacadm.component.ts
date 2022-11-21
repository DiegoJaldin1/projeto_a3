import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastropacadm',
  templateUrl: './cadastropacadm.component.html',
  styleUrls: ['./cadastropacadm.component.css']
})
export class CadastropacadmComponent implements OnInit {

  nome=''
  cpf=''
  dt_nascimento=''
  profissao=''
  sexo=''
  rua=''
  numero_rua=''
  bairro=''
  cep=''


  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionCadastropac(){
    return this.HttpClient.post<{erro:false, mensagem:''}>('http://localhost:8000/cadastro-paciente', 
    {nome: this.nome, cpf: this.cpf, dt_nascimento: this.dt_nascimento, 
      profissao :this.profissao, sexo: this.sexo, rua: this.rua, numero_rua: this.numero_rua,
       bairro: this.bairro, cep: this.cep})
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

  connectionCadastromed(){
    this.rota.navigate(['cadastromedadm'])
  }

  ngOnInit(): void {
  }

}
