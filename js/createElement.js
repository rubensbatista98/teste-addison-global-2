"use strict";

function createElement({ tag, classes, content, attributes }) {
  const element = document.createElement(tag);

  if (classes && classes.length > 0) {
    element.setAttribute("class", classes.join(" "));
  }

  if (content) element.textContent = content;

  if (attributes) {
    for (const attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }

  return element;
}

export default createElement;
