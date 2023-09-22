import { style } from '@angular/animations';
import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit , ElementRef, Inject, Optional } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import{localstorageToken}from './localstorage.token';
import { loggerService } from './logger.service';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template:`<h1>hello world from in line template!</h1>
  //<p>angular is awsome</p>

  styleUrls: ['./app.component.scss'],
  // styles:[`h1{color:red;}`]
})
export class AppComponent implements OnInit{
  title = 'hotelinventory';

  @ViewChild('name',{static:true}) name!:ElementRef;
role: any;

  constructor(
   @Optional() private loggerService: loggerService,
    @Inject(localstorageToken) private localStorage:any ,
    private initService: InitService,
    private confiService: ConfigService,
    private router:Router,
     ){
      console.log(this.initService);
      }
  ngOnInit(){
    // this.router.events.subscribe((event)=>{
    //   console.log(event);
    // })
this.router.events.pipe(
  filter((event)=>event instanceof NavigationStart)
).subscribe((event)=>{
  console.log('Navigation Started');
});

    // })
    this.router.events.pipe(
      filter((event)=>event instanceof NavigationEnd)
    ).subscribe((event)=>{
      console.log('Navigation Completed');
    });

  this.loggerService?.log('Appcomponent.ngOnInit()');
  this.name.nativeElement.innerText="Hilton hotel";
  this.localStorage.setItem('name','Hilton Hotel');
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.NumberOfRooms=50;
  //
 
}
