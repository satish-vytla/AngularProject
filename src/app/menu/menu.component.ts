import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import {DishService} from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  dishes: Dish[];

  selectedDish : Dish;
  selectedComments:Dish;

  constructor(private dishSerivce :DishService) {


  }

  ngOnInit() {
    this.dishes=this.dishSerivce.getDishes();
    console.log('Console dishes info____________',this.dishes);
  }
  onSelect(dish: Dish) {
    //this.dishes=this.dishSerivce.getDishes();
    this.selectedDish = dish;
    this.selectedComments= dish;
    console.log("this.selectedComments", this.selectedComments);
  }


}

