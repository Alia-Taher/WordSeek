import { SEARCH_BUTTON_ID, SEARCH_INPUT_ID } from "../constants.js";

export const createSearchElement = () => {
  const element = document.createElement("div");
  element.id = "search-display";

  element.innerHTML = String.raw`
    <input id = "${SEARCH_INPUT_ID}" type = 'text 'placeholder = "What word do you seek...?"></input>
    <button id= "${SEARCH_BUTTON_ID}"> Search </button>
    `;
    
  return element;
};
