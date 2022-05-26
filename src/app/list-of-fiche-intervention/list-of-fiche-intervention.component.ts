import { Component, OnInit } from '@angular/core';
import { FicheInterventionService } from '../services/fiche-intervention.service';

@Component({
  selector: 'app-list-of-fiche-intervention',
  templateUrl: './list-of-fiche-intervention.component.html',
  styleUrls: ['./list-of-fiche-intervention.component.css']
})
export class ListOfFicheInterventionComponent implements OnInit {

  constructor(private ficheInterventionService : FicheInterventionService) { }

  ngOnInit(): void {
  }
  

}

// @Component({
//   selector: 'app-list-of-fiche-intervention',
//   templateUrl: './list-of-fiche-intervention.component.html',
//   styleUrls: ['./list-of-fiche-intervention.component.css']
// })
// export class ListOfFicheInterventionComponent implements OnInit {
//   //ficheInterventions : FicheIntervention[] ; 




//   constructor(private ficheInterventionService : FicheInterventionService) { }

//   ngOnInit(): void {
    
//   // }
//   // private getFicheIntervention(){
//   //   this.ficheInterventionService.getListFicheIntervention().subscribe(data=>
//   //     this.ficheInterventions = data 
//   //   )}

// /**
//  * 
  
//   private getTickets(){
//     this.serviceTicket.getListTicket().subscribe(data=>
//       this.tickets = data 
//     )
      

//   }
//   private getTicket(idSelectedTicket ){
//     this.serviceTicket.getTicketById(idSelectedTicket).subscribe(data=>
//       this.ticket =data)
//       console.log(idSelectedTicket)
//   }

//   OnSubmit(){
//     this.getTickets();
//   }
//  *  **/



//   }}


