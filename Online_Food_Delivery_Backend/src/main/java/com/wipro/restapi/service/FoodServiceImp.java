package com.wipro.restapi.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import com.wipro.restapi.entities.Food;
import com.wipro.restapi.repository.FoodRepository;

@Service
@Transactional
public class FoodServiceImp implements IFoodService {

    @Autowired
    FoodRepository foodRepo;

    @Override
    public Food addFood(Food food) {
        return foodRepo.save(food);
    }

    @Override
    public Food updateFood(Food food) {
        return foodRepo.save(food);
    }

    @Override
    public Food getFoodById(int id) {
        return foodRepo.findById(id).orElse(null);
    }

    @Override
    public String deleteFoodById(int id) {
        foodRepo.deleteById(id);
        return "Food Item Deleted Successfully";
    }

    @Override
    public List<Food> getAllFoods() {
        return foodRepo.findAll();
    }

    @Override
    public List<Food> getFoodsByCategory(String category) {
        return foodRepo.findByCategory(category);
    }

    @Override
    public List<Food> getFoodsByMaxPrice(double price) {
        return foodRepo.findByPriceLessThan(price);
    }
}