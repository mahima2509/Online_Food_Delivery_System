import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food } from '../food.model';

@Component({
  selector: 'app-food-update',
  templateUrl: './food-update.component.html',
  styleUrls: ['./food-update.component.css']
})
export class FoodUpdateComponent implements OnInit {
  foodForm: FormGroup;
  foodId!: number;

  constructor(
    private fb: FormBuilder,
    private foodService: FoodService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    // Extract the foodId from the route parameter
    this.foodId = +this.route.snapshot.paramMap.get('id')!; 
    this.foodService.getFoodById(this.foodId).subscribe((food: Food) => {
      // Patch form values with the data retrieved from the API
      this.foodForm.patchValue(food);
    });
  }

  onSubmit(): void {
    if (this.foodForm.valid) {
      // Update food using the form values and the current foodId
      this.foodService.updateFood(this.foodId, this.foodForm.value).subscribe(() => {
        this.router.navigate(['/foods']);
      });
    }
  }
}
