package com.wipro.restapi.service;
import java.util.List;
import com.wipro.restapi.entities.Food;

public interface IFoodService {

    Food addFood(Food food);
    
    Food updateFood(Food food);
    
    Food getFoodById(int id);
    
    String deleteFoodById(int id);
    
    List<Food> getAllFoods();
    
    List<Food> getFoodsByCategory(String category);
    
    List<Food> getFoodsByMaxPrice(double price);
}