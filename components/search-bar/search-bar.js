import { searchBarContainer } from "../..";

export function createSearchBar() {
  const newSearchBar = document.createElement("form");
  newSearchBar.classList.add("search-bar");
  newSearchBar.setAttribute("data-js", "search-bar");
  newSearchBar.setAttribute("action", "");
  searchBarContainer.append(newSearchBar);

  const newInput = document.createElement("input");
  newInput.classList.add("search-bar__input");
  newInput.setAttribute("name", "query");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("placeholder", "search characters");
  newInput.setAttribute("arial-label", "character name");
  newSearchBar.append(newInput);

  const searchBarButton = document.createElement("button");
  searchBarButton.classList.add("search-bar__button");
  searchBarButton.setAttribute("aria-label", "search for character");
  newSearchBar.append(searchBarButton);

  const newIcon = document.createElement("img");
  newIcon.classList.add("search-bar__icon");
  newIcon.setAttribute("src", "assets/magnifying-glass.png");
  newIcon.setAttribute("alt", "");
  searchBarButton.append(newIcon);
}
