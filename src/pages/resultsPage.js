import { USER_INTERFACE_ID, SEARCH_RESULTS } from "../constants.js";
import { createResultsElement } from "../views/resultsView.js";
import { backArrow } from "./helpers.js";
import { displayError } from "./helpers.js";


export const initResultsPage = async (word) => {

  const arrow = document.getElementById('arrow-button');
  if(!arrow){
  backArrow(); 
  }
  
  
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";
  userInterface.appendChild(createResultsElement());

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d60054b5dcmshc9523f7234dca38p10304ejsn961c05136323",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  };

  async function fetchMeaning(word, options) {
    try {
      const response = await fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${word}`,
        options
      );

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error:${error.message}`);
    }
  }

  async function renderResults(data) {
    const { word, results } = data;
    const resultsDisplay = document.getElementById("results-display");

    // display word
    const displayWord = document.createElement("h5");
    displayWord.textContent = word;
    resultsDisplay.appendChild(displayWord);

    // display definition
    results.forEach((result) => {
      const { partOfSpeech, definition, examples, synonyms } = result;

      const displayMeaning = document.createElement("div");
      displayMeaning.id = "result";

      displayMeaning.innerHTML = String.raw`
        <p id = "part-of-speech"> ${partOfSpeech}</P> 
        <p> <strong>Definition:</strong> ${definition}<p>
         
        ${examples ? `<p> <strong>Ex:</strong> ${examples}</p>` : ""}
        ${synonyms ? `<p> <strong> Synonyms:</strong> ${synonyms} </p>` : ""} `;

      resultsDisplay.appendChild(displayMeaning);
    });
  }

  try {
    const meaning = await fetchMeaning(word, options);
    console.log(meaning);
    await renderResults(meaning);
  } catch (error) {
    console.log(error.message);
    displayError(error);
  }
};
