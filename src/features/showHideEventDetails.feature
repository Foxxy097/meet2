Feature: Show/Hide an Event’s Details

Scenario: An event element is collapsed by default
Given a user in on the main page 
When event handel is not clicked 
Then the event details will be collapsedt

Scenario: User can expand an event to see its details
Given a user would like details on an event 
When the user clicks on event 
Then the event details expand

Scenario: User can collapse an event to hide its details
Given a user found the details they needed and want to move on 
When the user clicks on an expanded event 
Then the event will collapse to see less details 