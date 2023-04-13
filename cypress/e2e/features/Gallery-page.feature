Feature: Gallery Page

Scenario: Verify the functionality in Gallery screen
          When I visit the Gallery Page
          Then I should see Navigation bar visible on Gallery screen
          Then I should see hero section visibility on  screen
          Then I should see Explore button functionality on Gallery screen
          Then I should see title for Gallery screen


Scenario: Verify the footer and its contents in Gallery Page 
           When I visit the Gallery Page
           Then I should verify paragraph contents at footer top
           Then I should verify socialmedia call us and map at  bottom
           Then I should see back to top button on  screen           