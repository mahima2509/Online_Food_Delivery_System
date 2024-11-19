package com.wipro.restapi.exceptions;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(FoodNotFoundException.class)
    public ResponseEntity<String> handleFoodNotFoundException() {
        return ResponseEntity.badRequest().body("Food item not found in the database.");
    }
}