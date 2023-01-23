Feature: The big search feature
  I want to find TestCafe repository by Google search
  
  @youtubeHook
  Scenario: Searching for TestCafe on Youtube
    Given I open Youtube page
    When I type "Testcafe" on Youtube's search field
    And I press "enter" key
    Then I should see the list of videos