import { button } from '../molecules/index.js';

import {
  parseComponent
} from '../../utils/DOMUtils.js';

function header() {
  const component = (`
    <header>
      logo
      button
      talCosa
    </header>
  `);

  const buttonDefinition = button('Button', 'buttonTrigger', () => { console.log('Soy un boton :D') });

  return parseComponent(component).appendChild(buttonDefinition);
}

export default header;