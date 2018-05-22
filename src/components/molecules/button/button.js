import {
  icon
} from '../index.js';

import {
  parseComponent
} from '../../../utils/DOMUtils.js';

function button(text, className = "", callback) {
  const component = (
    `<button class="${className}">
      ${icon('')}
      ${text}
    </button>`
  );

  const componentParsed = parseComponent(component);

  componentParsed.addEventListener('click', callback);

  return componentParsed;
}

export default button;
