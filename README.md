# Automation test for Matillion

A simple log in page with feedback form behind it.

To sign in, use the following (hard coded) values:
```
Username: l.jenkins
Password: hunter2
```

The feedback form has validation to check that all required items are present, and phone, email and postcodes all look like they should. It doesn't actually do anything with the values, it just takes the user to a 'submitted' page. This is good enough for the test.

## To run:
`docker-compose up --build -d`

## Testing
`npm test` to execute tests

## UI Tests

TO DO

I have created a framework using POM
Under Cypress pages, I have created two files "feedbackFormPage.js" and "loginPage.js" where I put the elements so that I can use them in the test pages by importing them.

I also created some data in the example.json file which I have used to import data and use the given information.
I also used some of this data and put in the wrong details on purpose to verify the error message turns red, instead of typing incorrect values manually.

Finally, I created a custom Login command under Commands.js so that I can re-use them as a cy.method. 
this command also uses the correct data  from the example.json file

In the first test in the login.cy.js
I tried three different tests
    1- By not putting in the required information
    2- By trying to log in with invalid credentials
    3- And finally by logging in successfully and getting to the forms page

In the second test "feedbackForm.cy.js"
    I tested all the fields with expected requirements such as email expects @ sign
    and number only accepts number values and has to be 11 digits
    I checked that the css colour turns red when not put incorrect details.
    And initially verified that the Send Feedback class value is disabled first and after filling everything 
correctly it is no longer disabled.
