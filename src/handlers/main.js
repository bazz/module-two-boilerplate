import getUsersList from './user-list'
import getUserInfo from './/user-info'

export default function mainHandler() {
  const searchButton = document.getElementById('search')
    const searchResults = document.querySelector('.search-results')

    searchButton.addEventListener('click', getUsersList)
    searchResults.addEventListener('click', getUserInfo)
}
