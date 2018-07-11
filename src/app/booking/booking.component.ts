import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 
 
  

  selectedbooking='hotel' ;
  bookings=[ "hotel", "bus", "computer"];

  b:string;
  busTo=['Giyani','Tzaneen','Phalaborhwa'];
  busFrom=['Polokwane','Venda','Malamulele'];



  

  constructor() { }

  ngOnInit() {
  }

}
