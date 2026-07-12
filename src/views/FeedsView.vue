<script setup>
// javaScript
import SearchModal from '@/components/feeds/SearchModal.vue';
import { UserPlus2Icon } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { getAvatarUrl } from '@/utils/avatar';
import ProfileModal from '@/components/feeds/ProfileModal.vue';
import { userList as followersList, recentActivityList } from '@/utils/mockData';

const selectedCategory = ref('Activity')
const categories = ['Activity','Following']

const loadedActivity = ref(false)
const loadedFollowers= ref(false)

const currentAction = ref('')
const profileOpened = ref(null)

function handleCategory(categoryName) {
  selectedCategory.value = categoryName
}

function onButtonClick(actionName) {
  currentAction.value = actionName
}

function onProfileOpen(userObj) {
  profileOpened.value = userObj
}

onMounted(() => {
  loadedActivity.value = true
  loadedFollowers.value = true
})

</script>


<template>
    <!-- elements -->
    <div class="main-container">

      <h1>{{ selectedCategory }}</h1>

      <div class="filter-container">
        <button v-for="(category, index) in categories" :key="index" @click="handleCategory(category)" :style="selectedCategory === category ? {backgroundColor: 'navy'} : {backgroundColor: 'var(--color-blue)'}">
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
      <div v-else class="list-container">

        <div class="btn-container">
          <button @click="onButtonClick('add-follow')" :style="currentAction === 'add-follow' ? {backgroundColor: 'navy', color: 'white'} : {}" >
            <UserPlus2Icon class="icon" />
          </button>
        </div>
        <div class="list-container">
          <div v-if="followersList.length === 0 && !loadedFollowers" class="loading-card"> Loading... </div>
          <div v-else-if="followersList.length === 0 && loadedFollowers" class="error-card"> Failed to fetch </div>
          <button v-else v-for="follower in followersList" :key="follower.id" class="follower-card" @click="onProfileOpen(follower)">
            <img :src="getAvatarUrl(follower.user)" class="avatar">
            <h2>{{ follower.user }} </h2>
          </button>
        </div>

      </div>

    </div>
    <SearchModal v-if="currentAction === 'add-follow'" @close="onButtonClick('')" @open-profile="onProfileOpen"/>
    <ProfileModal v-if="profileOpened" :profileInfo="profileOpened" @close="onProfileOpen"/>
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
  font-size: 2.6rem;
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
  justify-content: center;

  overflow-y: auto;
  position: relative;
  overflow: visible;
}

.loading-card {
  height: 5rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0 0 0 1rem;
}

.error-card {
  height: 5rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  color: black;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0 0 0 1rem;
}

.activity-card {
  background-color: white;
  width: 100%;
  min-height: 6.5rem;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 2rem 0 2rem;
}

.activity-card:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: -2rem;   /* extends downward into the gap (gap is 1.5rem) */
  top: 70%;         /* starts right at the bottom edge of this card */
  left: 2.2rem;        /* matches dot's horizontal center (dot width 7px / 2) */
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
  outline: .1rem solid rgba(0, 0, 0, .2);
  border-radius: 100%;
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

.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  top: -5rem;
  right: 1rem;
  z-index: 5;
  height: 5rem;
  position: absolute;
}

.btn-container button {
  background-color: white;
  color: black;
  height: 4rem;
  width: 5rem;
  transition: background-color ease .25s;
  transition: color ease .25s;
}

.btn-container button:active {
  background-color: navy;
  color: white;
}

.follower-card {
  background-color: white;
  color: black;
  width: 100%;
  min-height: 6.5rem;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 2rem 0 2rem;
}

.follower-card h2 {
  padding: 0 0 0 2rem;
  font-size: 1.6rem;
}

.follower-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #e5e7eb;
}

.icon {
    width: 2.5rem;
    height: 2.5rem;
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
    background-color: var(--color-blue);
    border-radius: .5rem;
    border-width: 0;
    padding: .7rem;
    transition: background-color ease .25s;
}

button:hover {
   opacity: 80%;
}

</style>
