import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagemmed',
  templateUrl: './listagemmed.component.html',
  styleUrls: ['./listagemmed.component.css']
})
export class ListagemmedComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionInicio(){
    this.rota.navigate(['telainicialmed'])
  }

  connectionAbrirprontuario(){
    this.rota.navigate(['prontuariomed'])
  }

  ngOnInit(): void {
  }

}
