import { initMainPage } from "./pages/mainPage.js";

const loadApp = () => {
  initMainPage();
};

window.addEventListener("load", loadApp);
