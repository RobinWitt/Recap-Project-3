import { cardContainer } from "../index.js";

export function createPagination(currentPage, totalPage) {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("data-js", "pagination");
  pagination.textContent = `${currentPage} / ${totalPage}`;
  cardContainer.append(pagination);
}
