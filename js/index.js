"use strict";

import fecthApi from "./fetchApi.js";
import renderPromotions from "./renderPromotions.js";

(async function() {
  const filters = [...document.querySelectorAll("[data-id='filter']")];

  filters.forEach(filter =>
    filter.addEventListener("click", displayPromotions)
  );

  const API_URL = "http://www.mocky.io/v2/5bc3b9cc30000012007586b7";

  let promotions = [];

  try {
    document.querySelector(".promotions-section").innerHTML = "Loading...";

    promotions = await fecthApi(API_URL);

    if (promotions.length === 0) {
      const message = "Sorry, there are no promotions available at this time.";
      renderMessage(message);
      return;
    }
  } catch (error) {
    renderMessage(error.message);
    return;
  }

  if (promotions) renderPromotions(promotions);

  function renderMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.innerHTML = message;

    document.querySelector(".promotions-section").innerHTML = "";
    document.querySelector(".promotions-section").appendChild(messageElement);
  }

  function displayPromotions(event) {
    if (this.dataset.active === "true") return;

    [...document.querySelectorAll("[data-id='filter']")].forEach(
      filter => (filter.dataset.active = "false")
    );

    this.dataset.active = true;

    const promotions = [...document.querySelectorAll("[data-id='promotion']")];

    if (this.dataset.value === "all")
      promotions.forEach(promotion => promotion.removeAttribute("style"));

    if (this.dataset.value === "newCustomers") {
      promotions.forEach(promotion => {
        if (promotion.dataset.newcustomers === "false")
          promotion.style = "display: none";
      });
    }
  }
})();
