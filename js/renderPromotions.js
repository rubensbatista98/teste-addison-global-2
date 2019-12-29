"use strict";

import createElement from "./createElement.js";

function renderPromotions(promotions) {
  const promotionsSection = document.querySelector(".promotions-section");
  const fragmentElement = document.createDocumentFragment();

  const sortedPromotions = [...promotions].sort(
    (currentPromotion, nextPromotion) =>
      currentPromotion.sequence > nextPromotion.sequence
  );

  for (const promotion of sortedPromotions) {
    const promotionCard = createPromotionCard(promotion);
    fragmentElement.appendChild(promotionCard);
  }

  promotionsSection.innerHTML = "";
  promotionsSection.appendChild(fragmentElement);
}

function createPromotionCard(promotion) {
  const {
    name,
    description,
    heroImageUrl,
    termsAndConditionsButtonText,
    joinNowButtonText
  } = promotion;

  const PromotionCardElement = createElement({
    tag: "div",
    classes: ["promotion-card"]
  });

  const promotionImage = createElement({ tag: "div", classes: ["image"] });

  const imageElement = createElement({
    tag: "img",
    attributes: { src: heroImageUrl, alt: "Promotion Image" }
  });

  const PromotionTitle = createElement({
    tag: "h2",
    classes: ["title"],
    content: name
  });

  const PromotionDescription = createElement({
    tag: "p",
    classes: ["description"],
    content: description
  });

  const buttonsContainer = createElement({
    tag: "div",
    classes: ["buttons-container"]
  });

  const buttonTerms = createElement({
    tag: "a",
    classes: ["btn-primary"],
    content: termsAndConditionsButtonText,
    attributes: { href: "#" }
  });

  const buttonJoin = createElement({
    tag: "a",
    classes: ["btn-primary", "-dark"],
    content: joinNowButtonText,
    attributes: { href: "#" }
  });

  promotionImage.appendChild(imageElement);
  buttonsContainer.append(buttonTerms, buttonJoin);
  PromotionCardElement.append(
    promotionImage,
    PromotionTitle,
    PromotionDescription,
    buttonsContainer
  );

  return PromotionCardElement;
}

export default renderPromotions;
