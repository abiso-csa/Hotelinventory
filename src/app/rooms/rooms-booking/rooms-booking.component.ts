import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
 
  id: Number = 0;
 
  id$ =this.router.params.pipe(map((params) => params['get']('roomid')));
  
  constructor(private router: ActivatedRoute) { }
 
  ngOnInit(): void { 
   // this.id = this.router.snapshot.params['roomid'];
  // this.id$ = 
    //this . router.paramMap.subscribe((params) => {params.get('roomid');});
    
  }

}
