import { head } from './arrayUtils.js';

export function parseComponent(stringComponent) {
  const parser = new DOMParser();

  return head(parser
    .parseFromString(stringComponent, 'text/html')
    .body.children);
}