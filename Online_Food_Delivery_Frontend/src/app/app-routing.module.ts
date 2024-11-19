import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodCreateComponent } from './food-create/food-create.component';
import { FoodUpdateComponent } from './food-update/food-update.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';


const routes: Routes = [

  { path: 'foods', component: FoodListComponent },
  { path: 'foods/create', component: FoodCreateComponent },
  { path: 'foods/update/:id', component: FoodUpdateComponent },
  { path: 'foods/detail/:id', component: FoodDetailComponent },
  { path: '', redirectTo: '/foods', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
