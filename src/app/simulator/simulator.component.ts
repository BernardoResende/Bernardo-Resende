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
  sAli=7.63;
  eCivil=null;
  depen=null;

    jan=(22*this.sAli).toFixed(2);
    fev=(20*this.sAli).toFixed(2);
    mar=(22*this.sAli).toFixed(2);
    abr=(22*this.sAli).toFixed(2);
    mai=(20*this.sAli).toFixed(2);
    jun=(19*this.sAli).toFixed(2);
    jul=(23*this.sAli).toFixed(2);
    ago=(21*this.sAli).toFixed(2);
    set=(22*this.sAli).toFixed(2);
    out=(21*this.sAli).toFixed(2);
    nov=(21*this.sAli).toFixed(2);
    dez=(20*this.sAli).toFixed(2);
  
  totalsAli=this.jan+this.fev+this.mar+this.abr+this.mai+this.jun+this.jul+this.ago+this.set+this.out+this.nov+this.dez;

  
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