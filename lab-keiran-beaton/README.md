# Lab-27 directive-refactor

## Getting started

In the command line, type `npm install` to install all the dependencies

To start the app, use `npm run watch` to create the bundle
In another command line window, run `mongod --dbpath db` to start the database
In another command line window, run `node backend/server` to start the server

## Using the app

Go to localhost:8080 to see the app
to create a list, type the name into the name: input and click create list
To delete a list, click the delete button at the bottom of the list.

To create a note, fill in the inputs in the note creation form on a list and click create note.
To delete a note, click the delete button under the note.

##Testing

In the command line, run `karma start` to run tests on the controller

To run the linter, type `npm run lint` in the command line. This will lint all .js files in the app
