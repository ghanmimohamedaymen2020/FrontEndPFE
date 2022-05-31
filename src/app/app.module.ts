import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfFicheInterventionComponent } from './list-of-fiche-intervention/list-of-fiche-intervention.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';


import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { SaveFichInterventionToPDFComponent } from './save-fich-intervention-to-pdf/save-fich-intervention-to-pdf.component';
import { AddFicheInterventionComponent } from './add-fiche-intervention/add-fiche-intervention.component';



@NgModule({
  declarations: [
    AppComponent,
    ListOfFicheInterventionComponent,
    SaveFichInterventionToPDFComponent,
    AddFicheInterventionComponent
  ],
  imports: [
    CdkAccordionModule,
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule ,
    MatButtonModule,
    ReactiveFormsModule ,
    MatSelectModule,
    MatButtonModule,
    MatSliderModule,
    MatPaginatorModule ,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
