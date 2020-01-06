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

  arraySeguro: number[] = [21.51,20.95,17.19,22.55,27.29,30.60,34.61,38.74,39.78,43.01,50.70,54.03,71.97,94.32,151.69];


  constructor() { }

  ngOnInit() {
  }

  contasSeguro (idade: number): number {

    if ( idade == null ) { return 0;}

    if ( idade >= 1 && idade <= 5 ) {
      return this.arraySeguro[0];
    } else if ( idade <= 11 ) {
      return this.arraySeguro[1];
    } else if ( idade <= 13 ) {
      return this.arraySeguro[2];
    } else if ( idade <= 15 ) {
      return this.arraySeguro[3];
    } else if ( idade <= 20 ) {
      return this.arraySeguro[4];
    } else if ( idade <= 25 ) {
      return this.arraySeguro[5];
    } else if ( idade <= 30 ) {
      return this.arraySeguro[6];
    } else if ( idade <= 35 ) {
      return this.arraySeguro[7];
    } else if ( idade <= 40 ) {
      return this.arraySeguro[8];
    } else if ( idade <= 45 ) {
      return this.arraySeguro[9];
    } else if ( idade <= 50 ) {
      return this.arraySeguro[10];
    } else if ( idade <= 55 ) {
      return this.arraySeguro[11];
    } else if ( idade <= 60 ) {
      return this.arraySeguro[12];
    } else if ( idade <= 65 ) {
      return this.arraySeguro[13];
    } else if ( idade <= 70 ) {
      return this.arraySeguro[14];
    } else {
      return 0;
      }
  }

  // contas(): boolean {
  // this.encargo = this.brutos + this.jan;
  // return true;
  // }



  
}