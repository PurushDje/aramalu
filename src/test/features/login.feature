Feature: User Authentification test

Background:
Given the user navigates to the application
And user click on the login link

Scenario:Login should be success
And user enters the username as "purushtest"
And user enters the passzord as "purushtest"
When user click on the login button
Then the login is successful

