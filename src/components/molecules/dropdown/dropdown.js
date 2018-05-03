import { button } from '../index.js';

/**
 *
 * @returns {string} Dropdown component
 */
export default function dropdown() {
  const buttonClass = 'dropdown__trigger';
  const buttonText = 'toggle';

  return (`
    <div class="dropdown">
      ${button(buttonText, buttonClass)}
    </div>
  `);
}