import tmdb from "./tmdb"

async function loadPopularMovies() {
  try {
    const response = await tmdb.get('/movie/popular')
    return response.data.results
  }
  catch (err) {
    return err
  }
}

async function searchMovies(query) {
   try {
    const response = await tmdb.get('/search/movie', { params: { query } })
    return response.data.results
  }
  catch (err) {
    return err
  }
}


export { loadPopularMovies, searchMovies }
