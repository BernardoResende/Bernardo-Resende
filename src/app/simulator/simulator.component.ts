import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
  
  nome:string=null;
  idade:number=null;
  brutos:number=null;
  aCusto:number=null;
  encargo:number=null;
  sAli=7.63;
  eCivil=null;
  depen:number=null;
  tsu:number=null;
  negocio:number=null;
  seguro:number=null;
  nc:String=null;
  c1t:String=null;
  c2t:String=null;

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

    
  
  somaDias=((this.jan+this.fev+this.mar+this.abr+this.mai+this.jul+this.ago+this.set+this.out+this.nov+this.dez));

  


  
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

  // contas(): boolean {
  // this.encargo = this.brutos + this.jan;
  // return true;
  // }



  
}