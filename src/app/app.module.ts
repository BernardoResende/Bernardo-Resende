import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimulatorComponent } from './simulator/simulator.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule ],
  declarations: [ AppComponent, HelloComponent, SimulatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
