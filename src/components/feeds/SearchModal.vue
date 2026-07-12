<script setup>


// javaScript
import { ref } from 'vue'
import { getAvatarUrl } from '@/utils/avatar'
import { userList } from '@/utils/mockData'

// eslint-disable-next-line no-unused-vars
const props = defineProps(['item'])
const emit = defineEmits(['close', 'openProfile'])

const searching = ref(false)
const searchQuery = ref('')

const foundList = ref([])

async function handleSearch() {
  const toFind = searchQuery.value.trim()
  if (!toFind) {
    foundList.value = []
    return
  }

  try {
    foundList.value = userList.value.filter(item => item.user.toLowerCase().includes(toFind.toLowerCase()))
  }
  catch (err) {
    console.error(err)
  }
}

</script>


<template>
    <!-- elements -->
     <div class="modal-overlay" @click.self="emit('close')">
      <div class="search-container">
        <input type="string" placeholder="Search username" @focus="searching = true" @blur="searching = false" v-model="searchQuery" @keyup.enter="handleSearch" >
      </div>

      <div class="modal-container">
        <div v-if="searching && !searchQuery.trim().includes('') && foundList.length === 0" class="follower-card">
          <h2> Nothing found </h2>
        </div>
        <button v-else v-for="follower in foundList" :key="follower.id" class="follower-card" @click="emit('openProfile', follower)">
          <img :src="getAvatarUrl(follower.user)" class="avatar">
          <h2>{{ follower.user }} </h2>
        </button>
      </div>

  </div>
</template>


<style scoped>
/* styling */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0 0 0;

  z-index: 1000;
}

.search-container {
  padding: 3rem 2rem 0 2rem;
  width: 100%;
}

input {
  font-weight: 600;
  border: .1rem solid whitesmoke;
  border-radius: 1rem;
  background-color: whitesmoke;
  width: 100%;
  height: 4rem;
  padding: 0 1rem 0 1rem;
  transition: border-color .25s ease;
  outline: .1rem solid rgb(190, 190, 190);
}

input:focus {
  box-shadow: 0 0 0 .3rem cornflowerblue;
}

.modal-container {
  background: transparent;
  width: 100%;
  padding: 1rem 0 0 0;
  overflow-y: auto;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.modal-container h2 {
  font-size: 1.6rem;
  padding: 0 0 1rem 0;
}

.follower-card {
  background-color: white;
  color: black;
  width: calc(100% - 4rem);
  min-height: 6.5rem;
  position: relative;

  border-radius: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.follower-card h2 {
  padding: 0 0 0 2rem;
  font-size: 1.6rem;
}

.avatar {
  width: 4rem;
  height: 4rem;
  margin: 0 0 0 1rem;
  outline: .1rem solid rgba(0, 0, 0, .2);
  border-radius: 100%;
}


.overview {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.2rem;
  max-height: 7.2rem;
  overflow-y: auto;
}

.rating {
  position: absolute;
  bottom: 0;
  margin: 0 0 1.6rem 0;
  font-size: 1.4rem;
  font-weight: bold;
}

.add-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 1rem 1rem 0;
}

button {
    font-weight: 600;
    color: white;
    background-color: navy;
    border-radius: .5rem;
    border-width: 0;
    padding: .7rem;
}

.poster {
  height: 75%;
  width: 100%;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
