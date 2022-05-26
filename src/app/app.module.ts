import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfFicheInterventionComponent } from './list-of-fiche-intervention/list-of-fiche-intervention.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ListOfFicheInterventionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
