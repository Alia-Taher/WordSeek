
# WORD SEEK

**WORD SEEK** is an English-to-English dictionary web application designed to help users find definitions, synonyms, and other word-related information. The primary goal of this project is to demonstrate and practice working with external APIs and handling asynchronous operations in JavaScript.

## Folder Overview

``` bash
wordseek
├── public
│     ├──img
│     └── style.css
└── src
    ├── pages
    │   ├──helpers.js
    │   ├──mainPage.js
    │   └── resultsPage.js
    ├── views
    │    ├──mainView.js
    │    └── resultView.js
    │
    ├── index.html
    └── README.md
```

## Features

**Search for Word Definitions:** Input a word, and the app fetches and displays its definition, part of speech, synonyms, and example usage from the WordsAPI.

**Random Inspirational Quote:** Every time the page loads, a random quote is fetched from an external API and displayed.

**Error Handling:** The app handles API errors gracefully and alerts the user if something goes wrong.

## How It Works

The main page initializes with a search bar and a random quote.
Users can type in a word and click the search button (or press "Enter").
The app fetches the word's definition from the WordsAPI and displays it on the results page.
Users can navigate back to the main page using the back arrow button.

## Technologies

- JavaScript (ES6): The main logic and event handling.
- HTML/CSS: For the UI and page structure.
- WordsAPI: Used for fetching word definitions.
- DummyJSON: Used for fetching random quotes.
