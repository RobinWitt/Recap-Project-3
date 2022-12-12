export function createCharacterCard(
  cardImageSrc,
  cardTitle,
  cardStatus,
  cardType,
  cardOccurences,
  destination
) {
  // card
  const card = document.createElement("li");
  card.classList.add("card");
  destination.append(card);
  //image container
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card__image-container");
  card.append(imageContainer);
  // character image
  const charImage = document.createElement("img");
  charImage.classList.add("card__image");
  charImage.setAttribute("src", `${cardImageSrc}`);
  charImage.setAttribute("alt", `${cardTitle}`);
  imageContainer.append(charImage);
  // image gradient
  const imageGradient = document.createElement("div");
  imageGradient.classList.add("card__image-gradient");
  imageContainer.append(imageGradient);
  // card content div
  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");
  card.append(cardContent);
  // card title
  const newCardTitle = document.createElement("h2");
  newCardTitle.classList.add("card__title");
  newCardTitle.textContent = cardTitle;
  cardContent.append(newCardTitle);

  // card info list
  const cardInfo = document.createElement("dl");
  cardInfo.classList.add("card__info");
  cardContent.append(cardInfo);
  // char status
  const cardInfoTitle1 = document.createElement("dt");
  cardInfoTitle1.classList.add("card__info-title");
  cardInfoTitle1.textContent = "Status";
  cardInfo.append(cardInfoTitle1);
  // char status content
  const cardInfoStatus = document.createElement("dd");
  cardInfoStatus.classList.add("card__info-description");
  cardInfoStatus.textContent = cardStatus;
  cardInfo.append(cardInfoStatus);
  // char type
  const cardInfoTitle2 = document.createElement("dt");
  cardInfoTitle2.classList.add("card__info-title");
  cardInfoTitle2.textContent = "Type";
  cardInfo.append(cardInfoTitle2);
  // char type content
  const cardInfoType = document.createElement("dd");
  cardInfoType.classList.add("card__info-description");
  cardInfoType.textContent = cardType;
  cardInfo.append(cardInfoType);
  // char occurences
  const cardInfoTitle3 = document.createElement("dt");
  cardInfoTitle3.classList.add("card__info-title");
  cardInfoTitle3.textContent = "Occurences";
  cardInfo.append(cardInfoTitle3);
  // char occurences content
  const cardInfoOccurences = document.createElement("dd");
  cardInfoOccurences.classList.add("card__info-description");
  cardInfoOccurences.textContent = cardOccurences;
  cardInfo.append(cardInfoOccurences);
}
