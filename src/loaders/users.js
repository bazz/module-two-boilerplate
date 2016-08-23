import { API_PROXY_URL, GAME } from '../constants';
import { PAPIError } from '../handlers';

export default function loadUsers(username) {
  const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`;

  return fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      if (json.status === 'ok' && json.data.length) {
        return json.data;
      }

      const error = json.error || {};
      throw new PAPIError(error.message || 'INVALID_SEARCH');
    });
}
