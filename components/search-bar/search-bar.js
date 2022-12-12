import { searchBar } from "../..";
import { searchBarContainer } from "../..";

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchInput = event.target.elements.query;
  console.log(searchInput);
});
