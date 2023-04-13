Feature: About Page

Scenario: Verify the functionality in About screen
          When I visit the About Page
          Then I should see Navigation bar visible on About screen
          Then I should see hero section visibility on  screen
          Then I should see title for About screen


Scenario: Verify the footer and its contents in About Page 
           When I visit the About Page
           Then I should verify paragraph  at footer top
           Then I should verify socialmedia call us and map at about bottom
           Then I should see back to top button on  screen           