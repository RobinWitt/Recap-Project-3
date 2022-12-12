import { createCharacterCard } from "./components/card/card.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
let page = 1;
const searchQuery = "";

fetchCharacters(page);
pagination.textContent = `${page} / 42`;

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page);
    cardContainer.innerHTML = "";
  }
});
nextButton.addEventListener("click", () => {
  if (page < 42) {
    page++;
    fetchCharacters(page);
    cardContainer.innerHTML = "";
  }
});

// fetch characters with variable page
async function fetchCharacters(pageNumber) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
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
