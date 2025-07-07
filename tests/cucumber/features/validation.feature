### Example 2: Validation Feature
Feature: Email Validation
  As a system
  I want to validate email addresses
  So that only valid emails are accepted

  Scenario Outline: Valid email addresses
    Given I have an email address "<email>"
    When I validate the email format
    Then the email should be considered valid

    Examples:
      | email                    |
      | test@example.com         |
      | user.name@domain.co.uk   |
      | admin@company.org        |
      | firstname+lastname@test.com |

  Scenario Outline: Invalid email addresses
    Given I have an email address "<email>"
    When I validate the email format
    Then the email should be considered invalid

    Examples:
      | email           |
      | invalid-email   |
      | test@           |
      | @example.com    |
      | test@example    |
      | test..test@example.com |

  Scenario: Empty email validation
    Given I have an empty email address
    When I validate the email format
    Then the email should be considered invalid

