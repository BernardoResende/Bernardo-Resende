import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimulatorComponent } from './simulator/simulator.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { Simulator2Component } from './simulator2/simulator2.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule, MatToolbarModule, MatSelectModule, MatSidenavModule ],
  declarations: [ AppComponent, HelloComponent, SimulatorComponent, TopmenuComponent, Simulator2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
