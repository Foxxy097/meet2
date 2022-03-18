Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given a user has not chosen how many events to see on one page 
When the user opens the page 
Then they will see 32 events by default

Scenario: User can change the number of events they want to see
Given the user wants to change the number of events on a page 
When they click the dropdown 
Then they will be able to choose the number of events they can see at once