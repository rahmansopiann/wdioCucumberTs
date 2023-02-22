Feature: Category

Scenario:

    Given I am on the login page
    When I input rahmansopian6@gmail.com as email
    When I input P@ssw0rd as password
    When I click button submit
    Then I should see dashboard page

Scenario Outline: Successfully Add new category

    Given I am on category page
    When I click button tambah
    When I input <nama> as nama
    When I input <deskripsi> as description
    When I click button simpan
    Then I should see success message
    Examples:
    | nama    | deskripsi |
    | Ciki    | Ciki      |

Scenario: Unsuccessfully Add new category

    Given I am on category page
    When I click button tambah
    When I click button simpan
    Then I should see error message
