Feature: Menu Page

Scenario: Verify the functionality in Menu screen
          When I visit the Menu Page
          Then I should see hero section visibility on  screen
          Then I should see explore button functionality on Menu screen
          Then I should see Navigation bar visible on Menu screen
          Then I should see title for Menu screen
          Then I should see all '5' headings in screen is visible

Scenario: Verify the number of images in Menu screen
          When I visit the Menu Page          
          Then I should see '4' images present in breakfast time 
          Then I should see '6' images present in breakfast allday
          Then I should see '2' images present in Meals
          Then I should see '2' images present in Sweets
          Then I should see '6' images present in beverages

Scenario: Verify the footer and its contents in Menu Page 
           When I visit the Menu Page
           Then I should see paragraph contents at footer top
           Then I should see socialmedia call us and map at  bottom
           Then I should see back to top button on  screen          