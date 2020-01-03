import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  idade=null;
  brutos=null;
  aCusto=null;
  

  constructor() { }

  ngOnInit() {
  }

}