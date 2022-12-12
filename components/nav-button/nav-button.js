import { navigation } from "../../index.js";

export function createButton(type, name) {
  const newButton = document.createElement("button");
  newButton.classList.add("button");
  newButton.classList.add(`button--${type}`);
  newButton.setAttribute("data-js", `button-${type}`);
  newButton.textContent = `${name}`;
  navigation.append(newButton);
}
