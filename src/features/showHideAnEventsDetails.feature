Feature: Show/Hide event details
    Scenario: An event element is collapsed by default.
        Given the user opens the app
        When the user receives the full list of events
        Then all events will collapse by default

    Scenario: User can show event details.
        Given the list of events loads
        When the user clicks on the show details button
        Then the details of that event should be visible

    Scenario: User can hide event details.
        Given the event details are visible
        When the user clicks on the hide details button
        Then the event details should be hidden
