import { button } from '../index.js';

import {
  parseComponent
} from '../../../utils/DOMUtils.js';

/**
 *
 * @returns {string} Dropdown component
 */
export default function dropdown() {
  const buttonClass = 'dropdown__trigger';
  const buttonText = 'toggle';

  const component = (`
    <div class="dropdown">
      ${button(buttonText, buttonClass, () => { console.log('Soy un boton :D') })}
    </div>
  `);

  return parseComponent(component);
}