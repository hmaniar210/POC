Feature: User Authentication
  As a user
  I want to be able to log in to the system
  So that I can access my dashboard

  Background:
    Given the following users exist:
      | email              | password | name         |
      | admin@example.com  | admin123 | Admin User   |
      | user@example.com   | user123  | Regular User |

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter email "admin@example.com" and password "admin123"
    And I click the login button
    Then I should be redirected to the dashboard
    And I should see "Welcome, Admin User!"

  Scenario: Failed login with invalid password
    Given I am on the login page
    When I enter email "admin@example.com" and password "wrongpassword"
    And I click the login button
    Then I should see an error message "Invalid email or password"
    And I should remain on the login page

  Scenario: Failed login with non-existent user
    Given I am on the login page
    When I enter email "nonexistent@example.com" and password "password"
    And I click the login button
    Then I should see an error message "Invalid email or password"
    And I should remain on the login page

  Scenario: Empty credentials validation
    Given I am on the login page
    When I click the login button without entering credentials
    Then I should see validation errors for required fields