import { createCharacterCard } from "./components/card/card.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
export const navigation = document.querySelector('[data-js="navigation"]');

createSearchBar();
createButton("prev", "previous");
createPagination();
createButton("next", "next");

const searchBar = document.querySelector('[data-js="search-bar"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// landing page
fetchCharacters(page, searchQuery);

// search filter

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters(page, searchQuery);
  cardContainer.innerHTML = "";
  event.target.reset();
});

// change page
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page, searchQuery);
    cardContainer.innerHTML = "";
  }
});
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters(page, searchQuery);
    cardContainer.innerHTML = "";
  }
});

// fetch characters with variable url
async function fetchCharacters(pageNumber, searchQuery) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchQuery}`
    );
    if (response.ok) {
      // Success (Good Response)
      const data = await response.json();
      const results = data.results;
      results.forEach((character) => {
        createCharacterCard(
          character.image,
          character.name,
          character.status,
          character.type,
          character.episode.length
        );
        pagination.textContent = `${pageNumber} / ${data.info.pages}`;
        maxPage = data.info.pages;
      });
      return data;
    } else {
      // Failure (Bad Response)
      console.error("Bad Response");
    }
  } catch (error) {
    // Failure (Network error, etc)
    console.error("An Error occurred");
  }
}
