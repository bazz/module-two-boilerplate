import { renderUsername } from '../renderers/user'

export default function renderSearchResult(node, accounts) {
  const results = accounts.map(renderUsername).join('')
  node.innerHTML = results
}
