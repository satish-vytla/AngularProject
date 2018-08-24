import { Component, OnInit } from '@angular/core';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  myName: String;
  private myDish:{};
  constructor(private dishdetailcomponent: DishdetailComponent) {
    this.dishdetailcomponent.dish.comments;
  }
  ngOnInit() {
    this.testFunction();
  }

  testFunction() {
    // this.dishdetailcomponent.cast.subscribe(myName=>this.myName=myName);
    console.log('-----------this.dishdetailcomponent.dish.comments',this.dishdetailcomponent.dish.comments);
    this.myDish = this.dishdetailcomponent.dish.comments;
    console.log(this.myDish);

  }

}
