import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getAllFoods().subscribe(data => {
      this.foods = data;
    });
  }

  deleteFood(id: number): void {
    if (id !== undefined) {
    this.foodService.deleteFood(id).subscribe(() => {
      this.foods = this.foods.filter(food => food.id !== id);
    });
  }
}
}
