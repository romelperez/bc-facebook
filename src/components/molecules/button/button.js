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

  console.log(parseComponent(component))
}

export default button;
