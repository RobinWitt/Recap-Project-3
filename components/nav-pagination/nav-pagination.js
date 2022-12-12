import { navigation } from "../../index.js";

export function createPagination() {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("data-js", "pagination");
  //pagination.textContent = `${currentPage} / ${totalPage}`;
  navigation.append(pagination);
}
