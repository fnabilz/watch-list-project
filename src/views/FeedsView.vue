<script setup>
// javaScript

import {  } from '@lucide/vue';
import { onMounted, ref } from 'vue';

const selectedCategory = ref('Activity')
const categories = ['Activity','Friends']

const recentActivityList = ref([
  {
    id: 1,
    user: 'Fikri',
    action: 'Added "Dune: Part Two" to his watch list',
    time: '2 minutes ago',
  },
  {
    id: 2,
    user: 'Nabil',
    action: 'Added "The Bear" to his watch list',
    time: '15 minutes ago',
  },
  {
    id: 3,
    user: 'Aisyah',
    action: 'Finished watching "Breaking Bad"',
    time: '1 hour ago',
  },
  {
    id: 4,
    user: 'Haziq',
    action: 'Added "Oppenheimer" to his watch list',
    time: '3 hours ago',
  },
  {
    id: 5,
    user: 'Sofia',
    action: 'Rated "Succession" 5 stars',
    time: '5 hours ago',
  },
  {
    id: 6,
    user: 'Danish',
    action: 'Added "Spider-Man: Across the Spider-Verse" to his watch list',
    time: 'Yesterday',
  },
  {
    id: 7,
    user: 'Iman',
    action: 'Finished watching "The Last of Us"',
    time: '2 days ago',
  },
  {
    id: 8,
    user: 'Qistina',
    action: 'Added "Poor Things" to her watch list',
    time: '3 days ago',
  },
])
const loadedActivity = ref(false)

function getAvatarUrl(name) {
  const encodedName = encodeURIComponent(name)
  return `https://ui-avatars.com/api/?name=${encodedName}&background=random`
}

function handleCategory(categoryName) {
  selectedCategory.value = categoryName
}

onMounted(() => {
  loadedActivity.value = true
})

</script>


<template>
    <!-- elements -->
    <div class="main-container">
      <h1>{{ selectedCategory }}</h1>

      <div class="filter-container">
        <button v-for="(category, index) in categories" :key="index" @click="handleCategory(category)" :style="selectedCategory === category ? {backgroundColor: 'navy'} : {backgroundColor: 'cornflowerblue'}">
          {{ category }}
        </button>
      </div>

      <div v-if="selectedCategory === 'Activity'" class="list-container">
          <div v-if="recentActivityList.length === 0 && !loadedActivity" class="loading-card"> Loading... </div>
          <div v-else-if="recentActivityList.length === 0 && loadedActivity" class="error-card"> Failed to fetch </div>
          <div v-else v-for="activity in recentActivityList" :key="activity.id" class="activity-card">

           <div class="dot"></div>

            <img :src="getAvatarUrl(activity.user)" class="avatar">
            <div class="card-content">
              <div class="card-header">
                <span>{{ activity.user }} </span>
                <span>{{ activity.time }} </span>
              </div>
              <div class="card-body">
                <span>{{ activity.action }}</span>
              </div>
            </div>
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

h1 {
  padding: 4rem 0 2rem 3rem;
}

.filter-container {
  display: flex;
  flex-direction: row;
  padding: 0 0 1rem 2rem;
  gap: 1rem;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: .4rem;
  margin: 0 2rem 2rem 2rem;

  overflow-y: auto;
  position: relative;
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

.activity-card {
  background-color: white;
  width: 100%;
  min-height: 6rem;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.activity-card:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: -2.3rem;   /* extends downward into the gap (gap is 1.5rem) */
  top: 70%;         /* starts right at the bottom edge of this card */
  left: 2.2px;        /* matches dot's horizontal center (dot width 7px / 2) */
  width: 3px;
  background: #d1d5db;
  z-index: 5;
  border-radius: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.dot {
  z-index: 3;
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: navy;
}

.avatar {
  width: 4rem;
  height: 4rem;
  margin: 0 0 0 1rem;
  border-radius: 1rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  width: 27rem;
  height: 4rem;
}

.card-header {
  font-size: 1.3rem;
  margin: 0 0 .5rem 1rem;
  font-weight: bold;
  color: black;
  text-align: left;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-body {
  font-size: 1.2rem;
  margin: 0 0 0 1rem;
  font-weight: 400;
  color: black;
  text-align: left;

  display: flex;
  flex-direction: column;
}

.icon {
    color: #6D8196;
    width: 2rem;
    height: 2rem;
}

input {
    font-weight: 400;
    border-width: 0;
    border-radius: .5rem;
    background-color: whitesmoke;
    width: 100%;
    height: 3rem;
    padding: 0 1rem 0 1rem;
}

button {
    font-weight: 600;
    color: white;
    background-color: cornflowerblue;
    border-radius: .5rem;
    border-width: 0;
    padding: .7rem;
}

button:hover {
   opacity: 80%;
}

</style>
