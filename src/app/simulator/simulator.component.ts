import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  idade=28;
  brutos=1000;
  aCusto=500;
  
  meses=[
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  titulos=[
    'Nome',
    'Idade',
    'Brutos',
    'A. Custo',
    'Sub. Ali.',
    'E. Civil',
    'Depend.',
    'IRS',
    'Seguro p/mês',
    'IRS p/mês',
    'SS p/mês',
    'TSU p/mês',
  ]

  constructor() { }

  ngOnInit() {
  }

}