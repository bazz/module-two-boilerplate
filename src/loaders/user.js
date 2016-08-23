import { API_PROXY_URL, GAME } from '../constants'
import { PAPIError } from '../handlers/error'

export default function loadUserInfo(accountId) {
  const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${accountId}`

  return fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      if (json.status === "ok") {
        return json.data[accountId]
      } else {
        const error = json.error || {}
        throw new PAPIError(error.message || 'ACCOUNT_ID_NOT_SPECIFIED')
      }
    })
}
