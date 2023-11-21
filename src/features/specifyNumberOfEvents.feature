Feature: Specify number of events
    Scenario: User can specify the number of events to be displayed.
        Given the list of events was loaded
        When the user specifies the number of events to be displayed
        Then the app should display the specified number of events based on the user input
