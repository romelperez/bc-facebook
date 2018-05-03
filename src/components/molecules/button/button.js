import {
  icon
} from '../index.js';

/**
 *
 * @param {string} text Text inside the button tag
 * @param {string} className CSS class
 * @returns {string}
 */
function button(text, className = "") {
  return (
    `<button class="${className}">
      ${icon('')}
      ${text}
    </button>`
  );
}

export default button;
