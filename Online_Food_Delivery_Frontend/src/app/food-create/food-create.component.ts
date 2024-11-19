import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from '../food.service';
import { Food } from '../food.model';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.css']
})
export class FoodCreateComponent {
  foodForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private foodService: FoodService,
    private router: Router
  ) {
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],  // Added category field
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]]  // Ensure minimum price is 1
    });
  }

  createFood(): void {
    if (this.foodForm.valid) {
      const newFood: Food = this.foodForm.value;
      this.foodService.addFood(newFood).subscribe({
        next: () => {
          this.router.navigate(['/foods']);
        },
        error: (err) => {
          console.error('Error adding food:', err);  // Log the error
        }
      });
    }
  }
}
