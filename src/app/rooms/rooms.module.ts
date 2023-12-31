import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouterConfigToken } from '../services/routeConfig.service';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
    RouterModule
  
  ],
  providers:[
    {provide:RouterConfigToken,
    useValue:{title:'Room'},
  },
  ],
})
export class RoomsModule { }
