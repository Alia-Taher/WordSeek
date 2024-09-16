import { initMainPage } from "./mainPage.js";
import { USER_INTERFACE_ID } from "../constants.js";

export const isOneWord = (word)=>{
return /^\S+$/.test(word)
}



export const reloadOnclick = ()=>{

const leftTitle  = document.getElementById('title-left');
const rightTitle = document.getElementById('title-right');

leftTitle.href = '/'
rightTitle.href = '/'

leftTitle.onclick = (event)=>{
    event.preventDefault();
    window.location.reload();
};

rightTitle.onclick =(event )=>{
    event.preventDefault();
    window.location.reload();
}
}

export const backArrow = () =>{
const header = document.querySelector('header');

let arrow = document.getElementById('arrow-button');
if(!arrow){
arrow = document.createElement('button')
arrow.id = 'arrow-button';
arrow.innerHTML= '&#8656;';

arrow.onclick= (event)=>{
const userInterface = document.getElementById(USER_INTERFACE_ID);
if (userInterface){
userInterface.innerHTML='';}
initMainPage();
}

header.appendChild(arrow)
}
}

export const displayError = (error)=>{
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    const resultDisplay = document.getElementById("results-display");
    resultDisplay.style.opacity = "0.2";
    const displayError = document.createElement("p");
    displayError.id = "display-error";
    displayError.innerHTML = `Sorry  something went wrong... :(
      <br>
      <br>
       <span>Try again later</span>`;
    userInterface.appendChild(displayError);
}