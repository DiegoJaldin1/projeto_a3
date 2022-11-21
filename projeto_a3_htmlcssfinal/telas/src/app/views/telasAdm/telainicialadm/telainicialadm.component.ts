import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telainicialadm',
  templateUrl: './telainicialadm.component.html',
  styleUrls: ['./telainicialadm.component.css']
})
export class TelainicialadmComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionListagem(){
    this.rota.navigate(['listagemadm']);
  }

  connectionProntuario(){
    this.rota.navigate(['prontuarioadm']);
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
