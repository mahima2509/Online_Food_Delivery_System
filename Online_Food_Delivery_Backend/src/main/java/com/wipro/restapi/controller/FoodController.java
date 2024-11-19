package com.wipro.restapi.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.wipro.restapi.entities.Food;
import com.wipro.restapi.service.IFoodService;

@RestController
@RequestMapping("/api/foods")
@CrossOrigin(origins = "http://localhost:4200")
public class FoodController {

    @Autowired
    IFoodService foodService;

    @GetMapping("/getall")
    public List<Food> getAllFoods() {
        return foodService.getAllFoods();
    }

    @GetMapping("/getbyid/{id}")
    public Food getFoodById(@PathVariable int id) {
        return foodService.getFoodById(id);
    }

    @GetMapping("/category/{category}")
    public List<Food> getByCategory(@PathVariable String category) {
        return foodService.getFoodsByCategory(category);
    }

    @GetMapping("/maxprice/{price}")
    public List<Food> getByMaxPrice(@PathVariable double price) {
        return foodService.getFoodsByMaxPrice(price);
    }

    @PostMapping("/add")
    public Food addFood(@RequestBody Food food) {
        return foodService.addFood(food);
    }

    @PutMapping("/update")
    public Food updateFood(@RequestBody Food food) {
        return foodService.updateFood(food);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteFood(@PathVariable int id) {
        return foodService.deleteFoodById(id);
    }
}
