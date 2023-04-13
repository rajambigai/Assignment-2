Feature: Contact Page

Scenario: Verify the functionality in Contact screen
          When I visit the Contact Page
          Then I should see hero section visibility on  screen
          Then I should see Navigation bar visible on Contact screen
          Then I should see Get the quote button functionality on Contact screen
          Then I should see title for Contact screen


Scenario: Verify that alert screen should be visible on clicking submit button 
          When I visit the Contact Page         
          Then I should fill the form
          Then I should should see alert screen on submit

Scenario: Verify the footer and its contents in Contact Page 
            When I visit the Contact Page
            Then I should see paragraph at footer top
            Then I should see socialmedia call us and map at Contact page bottom
            Then I should see back to top button on  screen          