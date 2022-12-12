import { navigation } from "../index.js";

export function createPreviousButton() {
  const newButton = document.createElement("button");
  newButton.classList.add("button button--prev");
  newButton.setAttribute("data-js", "button-prev");
  newButton.textContent = "previous";
  navigation.append(newButton);
}

export function createNextButton() {
  const newButton = document.createElement("button");
  newButton.classList.add("button button--next");
  newButton.setAttribute("data-js", "button-next");
  newButton.textContent = "next";
  navigation.append(newButton);
}
