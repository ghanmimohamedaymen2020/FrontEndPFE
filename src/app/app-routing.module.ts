import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFicheInterventionComponent } from './add-fiche-intervention/add-fiche-intervention.component';
import { ListOfFicheInterventionComponent } from './list-of-fiche-intervention/list-of-fiche-intervention.component';

const routes: Routes = [

  {path :"ficheInventaire" ,component : ListOfFicheInterventionComponent},
  {path : "addNewFicheIntervention" , component:AddFicheInterventionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
