@FullSuite
Feature: Purchase of products

  @TS-001
  Scenario: User logs in and purchase a products
    Given I have logged into Swag Labs
    When I add the following products into the shopping cart
      | Products              |
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
      | Sauce Labs Onesie     |
    And I click on the shopping cart icon
    And I click on the checkout button
    And I enter the following details on the Checkout: Your Information page
      | Firstname | Lastname | Zip/Postal Code |
      | John      | Smtih    |            2212 |
    And I click on the Finish button
    Then I should see the order complete header is displayed
