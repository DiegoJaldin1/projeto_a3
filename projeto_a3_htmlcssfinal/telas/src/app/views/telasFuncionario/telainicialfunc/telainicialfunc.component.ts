import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telainicialfunc',
  templateUrl: './telainicialfunc.component.html',
  styleUrls: ['./telainicialfunc.component.css']
})
export class TelainicialfuncComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionListagemfunc(){
    this.rota.navigate(['listagemfunc']);
  }
  
  connectionCadastropacfunc(){
    this.rota.navigate(['cadastropacfunc']);
  }

  ngOnInit(): void {
  }

}
