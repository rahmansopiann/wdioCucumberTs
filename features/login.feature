Feature: Login

  Scenario Outline: As a user, I can login to KasirAja Apps

    Given I am on the login page
    When I input <email> as email
    When I input <password> as password
    When I click button submit
    Then I should see dashboard page

    Examples:
      | email                   | password |
      | rahmansopian6@gmail.com | P@ssw0rd |

