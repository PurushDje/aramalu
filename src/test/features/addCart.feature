Feature: Add product to cart

Background: the user navigates to the application

Scenario: Add product to cart
Given the user navigates to the application
Then the user search product
When the user add the product to cart
Then the number is updated in the cart
