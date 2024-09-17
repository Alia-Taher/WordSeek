import {
  USER_INTERFACE_ID,
  SEARCH_BUTTON_ID,
  SEARCH_INPUT_ID,
  QUOTE_ID,
} from "../constants.js";
import { createSearchElement } from "../views/mainView.js";
import { initResultsPage } from "./resultsPage.js";
import { isOneWord, reloadOnclick, failedQuote } from "./helpers.js";

export const initMainPage = async () => {
  // remove back arrow from main page
  const arrow = document.getElementById("arrow-button");
  if (arrow) {
    arrow.remove();
  }

  //header links reload page on click
  reloadOnclick();

  //create search element
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.appendChild(createSearchElement());

  const searchButton = document.getElementById(SEARCH_BUTTON_ID);
  const searchBar = document.getElementById(SEARCH_INPUT_ID);

  // add event listeners to initiate results page
  searchButton.addEventListener("click", (event) => {
    const word = searchBar.value;
    if (isOneWord(word)) {
      initResultsPage(word);
    } else {
      alert("Enter one word only.");
    }
  });

  searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const word = searchBar.value;
      if (isOneWord(word) && event.key === "Enter") {
        initResultsPage(word);
      } else {
        alert("Enter one word only");
      }
    }
  });

  //  Generate a quote on load
  const url = "https://dummyjson.com/quotes/random";

  const fetchQuote = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(`Error:${error.message}`);
    }
  };

  const renderQuote = async (data) => {
    const displayQuote = document.createElement("div");
    displayQuote.id = QUOTE_ID;

    const { author, quote } = data;

    displayQuote.innerHTML = String.raw`
      <h6>Words to seek inspiration</h6>
      <p>${quote}</p>
      <p id = 'author'> ${author}</p>
      `;
    userInterface.appendChild(displayQuote);
  };

  try {
    const quote = await fetchQuote(url);
    await renderQuote(quote);
  } catch (error) {
    console.log(error);
    failedQuote(error);
  }
};
