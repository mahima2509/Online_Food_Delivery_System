import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrl = 'http://localhost:8080/api/foods';

  constructor(private http: HttpClient) { }

  getAllFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiUrl}/getall`);
  }

  getFoodById(id: number): Observable<Food> {
    return this.http.get<Food>(`${this.apiUrl}/getbyid/${id}`);
  }

  getFoodsByCategory(category: string): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiUrl}/category/${category}`);
  }

  getFoodsByMaxPrice(price: number): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiUrl}/maxprice/${price}`);
  }

  addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(`${this.apiUrl}/add`, food);
  }

  updateFood(id: number, food: Food): Observable<Food> {
    return this.http.put<Food>(`${this.apiUrl}/update`, { ...food, id });
  }

  deleteFood(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${id}`);
  }
}
