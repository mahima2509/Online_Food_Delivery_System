package com.wipro.restapi.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wipro.restapi.entities.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {

    List<Food> findByCategory(String category);
    
    List<Food> findByPriceLessThan(double price);
}