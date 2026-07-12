import tmdb from "./tmdb"

async function loadPopularShow() {
  try {
    const response = await tmdb.get('/discover/tv', {
      params: {
        include_adult: false,
        include_null_first_air_dates: false,
        language: 'en-US',
        sort_by: 'popularity.desc',
        with_origin_country: 'US|GB|KR|FR|ES|DE|CA'
      }
    })
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
