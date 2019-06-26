import { Component, OnInit } from '@angular/core';

import { Coracao } from '../sharec/coracao.model.ts';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracao_vazio.png'; //propert binding
  public coracaoCheio: string = '/assets/coracao_cheio.png';

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { }

  ngOnInit() {
  }

}
