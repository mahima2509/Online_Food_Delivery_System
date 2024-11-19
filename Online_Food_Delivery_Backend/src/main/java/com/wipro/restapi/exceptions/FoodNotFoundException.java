package com.wipro.restapi.exceptions;

public class FoodNotFoundException extends Exception {
    public FoodNotFoundException() {
        super("Food Item Not Found");
    }
}
