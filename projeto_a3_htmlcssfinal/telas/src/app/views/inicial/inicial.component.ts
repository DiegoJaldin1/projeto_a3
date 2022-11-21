import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(
    private HttpClient: HttpClient,
    private rota: Router
  ) { }

  connectionInicial(){
    this.rota.navigate(['login']);
  }

  ngOnInit(): void {
  }
}
