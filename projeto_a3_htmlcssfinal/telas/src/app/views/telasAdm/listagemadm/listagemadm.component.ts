import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagemadm',
  templateUrl: './listagemadm.component.html',
  styleUrls: ['./listagemadm.component.css'],
})
 

export class ListagemadmComponent implements OnInit {

  cpf=''

  constructor(
    private HttpClient: HttpClient,
    private rota: Router,
  ) { }


connectionInicio(){
  this.rota.navigate(['telainicialadm']);
}

connectionAbrirprontuario(){
  this.rota.navigate(['prontuarioadm', this.cpf]);
}

connectionCadastrofunc(){
  this.rota.navigate(['cadastrofuncadm']);
}

connectionCadastromed(){
  this.rota.navigate(['cadastromedadm']);
}

connectionCadastropac(){
  this.rota.navigate(['cadastropacadm']);
}

ngOnInit(): void {  

}

}
