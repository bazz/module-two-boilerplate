import { renderUsername } from '../renderers/user';

export default function renderSearchResult(node, accounts) {
  const element = node;
  const results = accounts.map(renderUsername).join('');
  element.innerHTML = results;
}
