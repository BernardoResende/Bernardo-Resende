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
  aCusto=null;
  sAli=7.63;
  eCivil=null;
  depen=null;
  tsu=null;

    jan=Math.round((22*this.sAli)*1e2)/1e2;
    fev=Math.round((20*this.sAli)*1e2)/1e2;
    mar=Math.round((22*this.sAli)*1e2)/1e2;
    abr=Math.round((22*this.sAli)*1e2)/1e2;
    mai=Math.round((20*this.sAli)*1e2)/1e2;
    jun=Math.round((19*this.sAli)*1e2)/1e2;
    jul=Math.round((23*this.sAli)*1e2)/1e2;
    ago=Math.round((21*this.sAli)*1e2)/1e2;
    set=Math.round((22*this.sAli)*1e2)/1e2;
    out=Math.round((21*this.sAli)*1e2)/1e2;
    nov=Math.round((21*this.sAli)*1e2)/1e2;
    dez=Math.round((20*this.sAli)*1e2)/1e2;
  
  totalsAli=Math.round((this.jan+this.fev+this.mar+this.abr+this.mai+this.jul+this.ago+this.set+this.out+this.nov+this.dez)*1e2)/1e2;

  encargo=[(ngModel)]="this.nome";

  
  
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

 
    

  constructor() { }

  ngOnInit() {
  }

}