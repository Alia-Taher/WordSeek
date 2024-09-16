import {
  USER_INTERFACE_ID,
  SEARCH_BUTTON_ID,
  SEARCH_INPUT_ID,
  QUOTE_ID,
} from "../constants.js";
import { createSearchElement } from "../views/mainView.js";
import { initResultsPage } from "./resultsPage.js";
import { isOneWord } from "./helpers.js";
import { reloadOnclick } from "./helpers.js";

export const initMainPage = async () => {
  reloadOnclick();
  const userInterface = document.getElementById(USER_INTERFACE_ID);

  userInterface.appendChild(createSearchElement());

  const searchButton = document.getElementById(SEARCH_BUTTON_ID);
  const searchBar = document.getElementById(SEARCH_INPUT_ID);

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

  /*
   *   Generate a quote
   */

  const url = "https://dummyjson.com/quotes/random";

  const fetchQuote = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
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
    const displayError= document.createElement('div');
    displayError.id = 'quote-error'
    displayError.textContent='Something went wrong :( ' 
    userInterface.appendChild(displayError)
  }
};
