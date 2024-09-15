import {
  USER_INTERFACE_ID,
  SEARCH_BUTTON_ID,
  SEARCH_INPUT_ID,
} from "../constants.js";
import { createSearchElement } from "../views/mainView.js";
import { initResultsPage } from "./resultsPage.js";
import { isOneWord } from "./helpers.js";

export const initMainPage = () => {
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
    if(event.key === "Enter"){
      const word = searchBar.value;
    if (isOneWord(word) && event.key === "Enter") {
      initResultsPage(word);
    } else {
      alert("Enter one word only");
    }
    }
    
  });
};
