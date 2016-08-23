import {
  renderSpinner,
  renderSearchResult
} from '../renderers'
import loadUsers from '../loaders/users'
import { handleError } from '../handlers/error'

export default function getUsersList() {
  const resultsNode = document.querySelector('.search-results')
  const username = document.getElementById('username').value
  const errorMessages = {
    INVALID_SEARCH: 'Ничего не найдено',
    SEARCH_NOT_SPECIFIED: 'Не задана строка поиска',
    NOT_ENOUGH_SEARCH_LENGTH: 'Минимальное количество символов для поиска: 3'
  }

  renderSpinner(resultsNode)
  loadUsers(username)
    .then((accounts) => renderSearchResult(resultsNode, accounts))
    .catch((error) => handleError(error, resultsNode, errorMessages))
}
