import { Component,OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'hinv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  comments$ = this.CommentService.getcomments();
  constructor(private CommentService : CommentService,
    private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>console.log(data['comments']));
  }
}
