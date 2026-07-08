<script setup>
// javaScript

import { } from '@lucide/vue';
import { loadPopularMovies, searchMovies } from '@/api/movieApi';
import { onMounted, ref } from 'vue';
import { loadPopularShow, searchShows } from '@/api/showApi';
import { getBackgroundImage } from '@/utils/tmdbImage';
import CardModal from '@/components/CardModal.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const movieList = ref([])
const showList = ref([])
const loadedMovies = ref(false)
const loadedShows = ref(false)

const errorMessage = ref('')
const searching = ref(false)
const searchQuery = ref('')
const queryList = ref([])
const queryLoaded = ref([])

const selectedCategory = ref('Movie')
const categories = ['Movie','Tv Show']

const selectedCard = ref(null)

function handleCategory(categoryName) {
  selectedCategory.value = categoryName
  searching.value = false
  searchQuery.value = ''
  queryList.value = []
  queryLoaded.value = false
}

function openCard(cardObj) {
  console.log(cardObj)
  selectedCard.value = cardObj
}

function closeCard() {
  selectedCard.value = null
}

async function handleSearch() {
  if (!searchQuery.value.trim())
    return

  try {
    const results = selectedCategory.value === 'Movie' ? await searchMovies(searchQuery.value) : await searchShows(searchQuery.value)
    queryList.value = results
  }
  catch (err) {
    errorMessage.value = err
  }
  finally {
    queryLoaded.value = true
  }

}

async function loadMovieFromApi() {
  try {
    movieList.value = await loadPopularMovies()
  }
  catch (err) {
    errorMessage.value = err
  }
  finally {
    loadedMovies.value = true
  }
}

async function loadShowsFromApi() {
  try {
    showList.value = await loadPopularShow()
  }
  catch (err) {
    errorMessage.value = err
  }
  finally {
    loadedShows.value = true
  }
}



onMounted(() => {
  if (route.query.category)
    selectedCategory.value = route.query.category
  loadMovieFromApi()
  loadShowsFromApi()
})


</script>


<template>
    <!-- elements -->
    <CardModal v-if="selectedCard" :item="selectedCard" @close="closeCard"/>

    <div class="main-container">
      <div class="search-container">
        <input type="string" placeholder="Search movie/show name" @focus="searching = true" @blur="searching = false" v-model="searchQuery" @keyup.enter="handleSearch" >
      </div>

      <div class="filter-container">
        <button v-for="(category, index) in categories" :key="index" @click="handleCategory(category)" :style="selectedCategory === category ? {backgroundColor: 'navy'} : {backgroundColor: 'cornflowerblue'}">
          {{ category }}
        </button>
      </div>

      <div v-if="!searching && searchQuery === '' && selectedCategory === 'Movie'" class="category-container" >
        <h1>Popular Movies</h1>
        <div class="list-container">
          <div v-if="movieList.length === 0 && !loadedMovies" class="loading-card"> Loading... </div>
          <div v-else-if="movieList.length === 0 && loadedMovies" class="error-card"> Failed to fetch </div>
          <button v-else v-for="movie in movieList" :key="movie.id" class="movie-card" @click="openCard(movie)" :style="{backgroundImage: getBackgroundImage(movie.backdrop_path)}">
            <p>
              <span>{{ movie.title }}</span>
            </p>
          </button>
        </div>
      </div>
      <div v-else-if="!searching && searchQuery === '' && selectedCategory === 'Tv Show'" class="category-container" >
        <h1>Popular Tv Shows</h1>
        <div class="list-container">
          <div v-if="showList.length === 0 && !loadedShows" class="loading-card"> Loading... </div>
          <div v-else-if="showList.length === 0 && loadedShows" class="error-card"> Failed to fetch </div>
          <button v-for="show in showList" :key="show.id" class="movie-card" @click="openCard(show)" :style="{backgroundImage: getBackgroundImage(show.backdrop_path)}">
            <p>
              <span>{{ show.name }}</span>
            </p>
          </button>
        </div>
      </div>
      <div v-else class="category-container" >
        <h1 v-if="queryList.length === 0">Searching...</h1>
        <h1 v-else>Found {{ queryList.length }} results</h1>
        <div class="list-container">
          <button v-for="result in queryList" :key="result.id" class="movie-card" @click="openCard(result)" :style="{backgroundImage: getBackgroundImage(result.backdrop_path)}">
            <p>
              <span v-if="selectedCategory === 'Movie'">{{ result.title }}</span>
              <span v-else>{{ result.name }}</span>
            </p>
          </button>
        </div>
      </div>

    </div>

</template>


<style scoped>
/* styling */
* {
    font-family: 'Roboto';
}

.main-container {
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0 0 6.5rem 0;
}

.search-container {
  padding: 3rem 2rem 0 2rem;
}

.filter-container {
  display: flex;
  flex-direction: row;
  padding: 1rem 0 0 2rem;
  gap: 1rem;
}

.category-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: 100%;

  overflow: hidden;
}

.category-container h1 {
  padding: 0 0 0 1rem;
}

.list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  overflow-y: auto;
}

.loading-card {
  border: .2rem solid #50ff5f;
  border-radius: 1rem;
  background-color: #d4fbd8;
  width: 100%;
  height: 5rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #50ff5f;
  font-size: small;
  font-weight: bold;
}

.error-card {
  border: .2rem solid #ff5050;
  border-radius: 1rem;
  background-color: #ffacac;
  width: 100%;
  height: 5rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ff5050;
  font-size: small;
  font-weight: bold;
}

.movie-card {
  border: .1rem solid #dadada;
  border-radius: 1rem;
  background-color: white;
  width: 100%;
  height: 12.8rem;
  position: relative;

  background: linear-gradient(135deg,rgba(173, 180, 199, 1) 0%, rgba(242, 242, 242, 1) 100%);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.movie-card p {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 4px;
  height: 100%;
  width: 100%;
}

.movie-card span {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 1rem 1rem 0;

  font-size: 1.4rem;
  font-weight: bolder;
}

.icon {
    color: #6D8196;
    width: 2rem;
    height: 2rem;
}

input {
    font-weight: 600;
    border: .1rem solid #dadada;
    border-radius: 1rem;
    background-color: whitesmoke;
    width: 100%;
    height: 4rem;
    padding: 0 1rem 0 1rem;
    transition: border-color .25s ease;
}

input:focus {
  outline: none;
  border-color: cornflowerblue;
}

button {
    font-weight: 600;
    color: white;
    background-color: cornflowerblue;
    border-radius: .5rem;
    border-width: 0;
    padding: .7rem;

    transition: background-color .25s ease;
}

button:hover {
   opacity: 80%;
}

</style>
