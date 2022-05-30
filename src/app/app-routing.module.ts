import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfFicheInterventionComponent } from './list-of-fiche-intervention/list-of-fiche-intervention.component';

const routes: Routes = [

  {path :"ficheInventaire" ,component : ListOfFicheInterventionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
