import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prontuariomed',
  templateUrl: './prontuariomed.component.html',
  styleUrls: ['./prontuariomed.component.css']
})
export class ProntuariomedComponent implements OnInit {

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
    private rota: Router
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
    this.rota.navigate(['telainicialmed'])
  }

  connectionProntuario(){
    this.rota.navigate(['prontuarioadm']);
  }





  ngOnInit(): void {
  }

}
