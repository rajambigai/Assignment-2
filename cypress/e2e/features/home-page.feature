Feature: Home Page

Scenario: Verify the functionality of sections and  navigation bar in Home Page
          When I visit the Home Page
          Then I should see Navigation bar and Links associated with it
          Then I should see title for Home screen
          Then I should see hero section visibility on  screen
          Then I should see explore button functionality on Home screen
          Then I should see Menu has '4' images
          Then I should see PartyOrder has '2' images
          Then I should see navigation to other screens from the home screen
          Then I have to test About Us,Menu and Contact link from Home Page 
         
          
        
Scenario: Verify the footer and its contents in Home Page 
            When I visit the Home Page
            Then I should see paragraph and its content at footer top
            Then I should see socialmedia call us and map at footer bottom
            Then I should see back to top button on  screen
               