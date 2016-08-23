import getUsersList from './handlers/user-list'
import getUserInfo from './handlers/user-info'

import 'main.css'

/*
full API description you can find here:
https://ru.wargaming.net/developers/api_reference

you don't have to pass application_id query param.
It will be passed automatically via proxy server
*/

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search')
  const searchResults = document.querySelector('.search-results')

  searchButton.addEventListener('click', getUsersList)
  searchResults.addEventListener('click', getUserInfo)
})
