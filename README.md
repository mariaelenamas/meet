*Filter Events by City*

● SCENARIO 1 <br>
As a user, I should be able to search for a specific city, so that see the upcoming events from all cities.

Given a user searched for a specific city; <br>
When the user clicks the chosen city; <br>
Then the user should see a list of upcoming events.

*Show/Hide Event Details*

● SCENARIO 2 <br>
As a user, I should see a list of events after typing in the search bar the city, so that I can see or hide details of a specific event.

Given the list of event; <br>
When the user clicks an event; <br>
Then the event section shows or hides the details.

*Specify Number of Events*

● SCENARIO 3 <br>
As a user, I should be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.

Given the user who specifies the number of events; <br>
When the user sees the list of events; <br>
Then the default number of displayed events will be the set number.

*Use the App when offline*

● SCENARIO 4 <br>
As a user, I should be able to get events information when offline, so that I can use the App was with no internet connection.

Given the user without internet connection; <br>
When the user starts using the App; <br>
Then cached data will be provided.

*Add an App Shortcut to the Home Screen*

● SCENARIO 5 <br>
As a user, I should be able to add a shortcut of the App to the Home Screen, so that I can have the access to the app faster.

Given the user who wants install the App shortcut; <br>
When the user clicks the option to add the App shortcut; <br>
Then the shortcut will be installed.

*Display Charts Visualizing Event Details*

● SCENARIO 6 <br>
As a user, I should be able to see a chart showing the upcoming events in each city, so
that I know what events are organized in which city.

Given the user who is viewing the event details section; <br>
When the user selects the "View Chart" button; <br>
Then the user will see a visual representation of the upcoming events by city.
