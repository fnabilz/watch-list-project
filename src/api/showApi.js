import tmdb from "./tmdb"

async function loadPopularShow() {
  try {
    const response = await tmdb.get('/tv/popular')
    return response.data.results
  }
  catch (err) {
    return err
  }
}

async function searchShows(query) {
   try {
    const response = await tmdb.get('/search/tv', { params: { query } })
    return response.data.results
  }
  catch (err) {
    return err
  }
}


export { loadPopularShow, searchShows }
