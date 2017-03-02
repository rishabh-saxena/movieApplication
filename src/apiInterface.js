const api = {
  readMovieData: function () {
    return fetch(`https://movie-api-atlrumqzze.now.sh/movies`, {method: 'get'})
  }
}
export default api
