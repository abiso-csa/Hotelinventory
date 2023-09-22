import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getcomments(){
    return this.http.get<Comment[]>(
      'http://localhost:3000/comments')
  }
}
