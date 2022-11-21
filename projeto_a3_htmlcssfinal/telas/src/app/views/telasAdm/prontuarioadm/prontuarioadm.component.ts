import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prontuarioadm',
  templateUrl: './prontuarioadm.component.html',
  styleUrls: ['./prontuarioadm.component.css']
})
export class ProntuarioadmComponent implements OnInit {

  cpf=''
  dt_nascimento=''
  sexo=''
  altura=''
  peso=''

  anamnese=''
  hip_diagnostico=''
  prescricao=''

  constructor(
    private HttpClient: HttpClient,
    private rota: Router,
    private location: Location
  ) { }

  connectionCadastroprontuario(){
    return this.HttpClient.post<{erro:false, mensagem:''}>('http://localhost:9000/criar-prontuario',
    {cpf: this.cpf, dt_nascimento:this.dt_nascimento, sexo:this.sexo, altura:this.altura, peso:this.peso, 
      anamnese:this.anamnese, hip_diagnostico:this.hip_diagnostico, prescricao:this.prescricao})
      .subscribe(
        (res) => {
          if(res.erro){
            console.log(res.mensagem)
          }
          else{
            window.location.href = window.location.href;
            console.log('Prontuário cadastrado com sucesso')
          }

        }
      )
  }

  connectionInicio(){
    this.rota.navigate(['telainicialadm'])
  }

  connectionListagem(){
    this.rota.navigate(['listagemadm'])
  }

  connectionCadastrofunc(){
    this.rota.navigate(['cadastrofuncadm'])
  }

  connectionCadastromed(){
    this.rota.navigate(['cadastromedadm'])
  }

  connectionCadastropac(){
    this.rota.navigate(['cadastropacadm'])
  }



  //connectionBuscarcpf(){
  //  this.location.path()
  //  this.rota.paramsInheritanceStrategy
  //}


  ngOnInit(): void {
  //  return this.HttpClient.get<{erro:false, mensagem:''}>('http://localhost:9000/criar-prontuario',
  //  {cpf: this.location.path().split('/')[2]})
  //  .subscribe(
  //    (res) => {
  //      if(res.erro){
  //        console.log(res.mensagem)
  //      }
  //    }

  //  )

  }
}
