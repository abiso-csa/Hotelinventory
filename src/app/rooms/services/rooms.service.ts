import { Inject, Injectable, inject } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../Appconfig/appconfig.service';
import { Appconfig } from '../../Appconfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { share, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [];
//headers = new HttpHeaders({'token':'12345564654sdgfg'});
getRooms$ =this.http.get<RoomList[]>('api/rooms').pipe(shareReplay(1));
 
  constructor(@Inject(APP_SERVICE_CONFIG) private config: Appconfig,
    private http: HttpClient) {
    console.log(this.config.apiEndPoint);
    console.log('Rooms Service Initialized...');
  }

  getRooms() {
    
    return this.http.get<RoomList[]>('api/room');

  }
  addRoom(room: RoomList) {
    return this.http.post<RoomList>('api/rooms', room);
  }
  editRoom(room: RoomList) {
    return this.http.put<RoomList>('/api/rooms/${room.roomNumber}', room);
  }
  delete(id: string) {
    return this.http.delete<RoomList>('/api/rooms/${id}');
  }
  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    });
    return this.http.request(request);
  }
}
  