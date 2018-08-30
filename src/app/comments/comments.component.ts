import { Component, OnInit, Input } from '@angular/core';
import {Dish} from '../shared/dish';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() satishComments: Dish;

  constructor() {
  }
  ngOnInit() {
  }
}