import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush

})
export class RoomsListComponent implements OnInit,OnChanges, OnDestroy {
  @Input() rooms: RoomList[]|null = [];
  @Input() title: string = '';
  @Input()price =0;
  @Output() Selectedroom = new EventEmitter<RoomList>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
   if(changes['title']){
    this.title = changes['title'].currentValue.toUpperCase();

   }
  }
  ngOnInit(): void {

  }


  SelectRoom(room: RoomList) {
    this.Selectedroom.emit(room);
  }

  ngOnDestroy(){
    console.log('on destory is called');
  }

}


