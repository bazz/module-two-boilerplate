import loadUserInfo from '../loaders/user';
import {
  renderSpinner,
  renderUserInfo,
 } from '../renderers';
import { handleError } from '../handlers/error';


export default function getUserInfo(event) {
  const resultsNode = document.querySelector('.user-results');
  const accountId = event.target.dataset.accountId;
  const searchResults = document.querySelector('.search-results .active');
  const errorMessages = {
    ACCOUNT_ID_NOT_SPECIFIED: 'ID аккаунта не указан',
    INVALID_ACCOUNT_ID: 'Неверный ID аккаунта',
  };

  if (event.target === event.currentTarget) {
    return false;
  }

  if (searchResults) {
    searchResults.classList.remove('active');
  }
  event.target.classList.add('active');

  renderSpinner(resultsNode);
  return loadUserInfo(accountId)
    .then((stats) => renderUserInfo(resultsNode, stats))
    .catch((error) => handleError(error, resultsNode, errorMessages));
}
