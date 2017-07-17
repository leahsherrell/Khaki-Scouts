# Troop

#### A program to display and manage the Khaki Scouts, Troop 55 from Moonrise Kingdom

#### By **Leah Sherrell**

## Description

Keep track of troop members.

### Specs
| Behavior | Example Input | Example Output |
| :-------------     | :------------- | :------------- |
| **** |  |  |



## Setup/Installation Requirements
1. Clone this repository.
2. In the terminal, navigate into the repository and run the following commands:
  $ npm install
  $ bower install
3. Create file 'api-keys.ts' in the app folder
4. Create a firebase account at https://firebase.google.com/ . On their site create a database called 'khaki-scouts'. Choose 'Add Firebase to your web app'.
5. Place the appropriate code snippet they give inside a variable to make it look similar to this:

export var masterFirebaseConfig = {
  apiKey: "xxxx",
  authDomain: "khaki-scouts.firebaseapp.com",
  databaseURL: "https://khaki-scouts.firebaseio.com",
  projectId: "khaki-scouts",
  storageBucket: "khaki-scouts.appspot.com",
  messagingSenderId: "xxxx"
};

inside the 'api-keys.ts' file
  -follow these instructions from Epicodus:
  We'll visit our Firebase Console once more, and select our project's name from the list.

  Then, we'll visit the Database area by selecting the Database option from the navbar on the left-hand side.

  Near the top of the page, there should be a blue navbar reading Realtime Database. Below this, select the option that reads RULES.

  Change both the ".read", and ".write" properties here to "true", like this:

  {
    "rules": {
      ".read": "true",
      ".write": "true"
    }
  }

6. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs
* None

## Technologies Used
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

* Angular2
* Node - npm
* Gulp
* Bower

## Support and contact details

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Leah Sherrell}_**
