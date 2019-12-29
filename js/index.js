"use strict";

import fecthApi from "./fetchApi.js";
import renderPromotions from "./renderPromotions.js";

(async function() {
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
})();
