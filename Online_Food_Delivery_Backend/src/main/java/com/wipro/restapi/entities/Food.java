package com.wipro.restapi.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "food") // Database table names are typically lowercase
public class Food {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotBlank(message = "Food name cannot be blank")
    @Column(name = "food_name")
    private String name;

    @Min(value = 1, message = "Price must be at least 1")
    private double price;

    @NotBlank(message = "Category cannot be blank")
    private String category;

    // Default constructor for JPA
    public Food() {}

    // Parameterized constructor
    public Food(Integer id, String name, Double price, String category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Food [id=" + id + ", name=" + name + ", price=" + price + ", category=" + category + "]";
    }
}
