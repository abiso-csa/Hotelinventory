import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, SkipSelf} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RoomList, room } from './rooms';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  HotelName = 'hilton hotel';
  NumberOfRooms = 10;
  hideRooms = true;
  selectedRoom!: RoomList;
  rooms: room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,

  };
  title = 'Room List';
  roomList: RoomList[] = [];
  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error;

  });
  @ViewChild(HeaderComponent) HeaderComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
   headerchildrencomponent!: QueryList<HeaderComponent>;
  
error: string = '';
totalBytes = 0;
subscription !:Subscription;

error$:Subject<string> =new Subject<string>();

getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      //console.log(err);
    this.error$.next(err.message);
  return of([]) ;
 })
  );
priceFilter =new FormControl(0);
roomsCount$ = this.roomsService.getRooms$.pipe(
  map((rooms) => rooms.length)
)

  constructor(@SkipSelf() private roomsService: RoomsService , private configService:ConfigService) { }


  ngOnInit(): void {

    this.roomsService.getPhotos().subscribe((event) => { 
      switch (event.type) {
        case HttpEventType.Sent:{
          console.log('request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader:{
          console.log('request success!');
          break;
        }
        case HttpEventType.DownloadProgress:{
          this.totalBytes = event.loaded;
          break;
        }
        case HttpEventType.Response:{
          console.log(event.body);
        }
      }
      
    })

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
   this.stream.subscribe((data) => console.log(data));
  //  this.subscription = this.roomsService.getRooms$.subscribe(rooms => {
  //     this.roomList = rooms;
  //   });

  }

  ngDoCheck() {
    console.log('on changes is called');
  }
  ngAfterViewInit() {
    this.HeaderComponent.title ='Rooms View';

    this.headerchildrencomponent.last.title = "Last Title";
    //this.headerchildrencomponent.get
  }
  ngAfterViewChecked() {

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
     // roomnumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'air Conditioner,free Wi-Fi,TV,Bathroom,Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };
    // this.roomList.push(room);
    //this.roomList = [...this.roomList, room];
   this.roomsService. addRoom(room).subscribe((data)=>{
    this.roomList = [...this.roomList, data];

   });
  }
editRoom(){
  const room: RoomList = {
    roomnumber: '3',
     roomType: 'Deluxe Room',
     amenities: 'air Conditioner,free Wi-Fi,TV,Bathroom,Kitchen',
     price: 500,
     photos: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
     checkinTime: new Date('11-Nov-2021'),
     checkoutTime: new Date('12-Nov-2021'),
     rating: 4.5,
   };
    this.roomsService.editRoom(room).subscribe((data)=>{
      this.roomList [0]=data;
    });
}
deleteRoom(){
  this.roomsService.delete('3').subscribe((data)=>{
    console.log(data);
  });
  
    }
    ngOnDestroy(){
  if(this.subscription){
    this.subscription.unsubscribe();
  }
    }
}

