import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
  
  nome=null;
  idade=null;
  brutos=null;
  aCusto=null;
  sAli=7.63;;
  eCivil=null;
  depen=null;

  
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
    'Seguro',
    'IRS',
    'SS',
    'TSU',
  ]

 
    jan=22;
    fev=20;
    mar=22;
    abr=22;
    mai=20;
    jun=19;
    jul=23;
    ago=21;
    set=22;
    out=21;
    nov=21;
    dez=20;

  constructor() { }

  ngOnInit() {
  }

}