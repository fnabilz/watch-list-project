<script setup>


// javaScript
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
import { getAvatarUrl } from '@/utils/avatar'
import { XIcon } from '@lucide/vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps(['profileInfo'])
const emit = defineEmits(['close'])

</script>


<template>
    <!-- elements -->
     <div class="modal-overlay" @click.self="emit('close', null)">

      <div class="modal-container">
        <img :src="getAvatarUrl(profileInfo.user)" class="avatar">
        <div class="profile-content">

          <div class="profile-background" :style="{backgroundColor: profileInfo.backgroundColor}">
            <button class="close-btn" @click="emit('close', null)">
              <XIcon/>
            </button>
          </div>

          <div class="profile-main">

            <div class="profile-header">
              <h1>{{ profileInfo.user }}</h1>
              <h2>{{ profileInfo.user }}</h2>
              <button class="follow-btn">
                Following
              </button>
            </div>

            <div class="profile-body">
              <p><b>{{ profileInfo.followers }}</b> followers</p>
              <p><b>{{ profileInfo.watchlistCount }}</b> in watchlist</p>
            </div>

          </div>
        </div>
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

.modal-container {
  background: white;
  width: calc(100% - 3rem);
  min-height: 30rem;
  overflow-y: auto;
  position: relative;
  border-radius: 3rem;

  top: 20vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.modal-container h2 {
  font-size: 1.6rem;
  padding: 0 0 1rem 0;
}

.avatar {
  width: 10rem;
  height: 10rem;
  border: 0.4rem solid white;
  border-radius: 100%;
  position: absolute;
  top: 35%;
  left: 20%;
  transform: translate(-50%, -50%);
}

.profile-content {
  display: grid;
  grid-template-rows: 40% 60%;

  width: 100%;
  height: 100%;
}

.profile-background {
  background-color: cadetblue;
}

.profile-main {
  padding: 4rem 2.5rem 0 2.5rem;

  display: flex;
  flex-direction: column;
  gap: .3rem;
}

.profile-header {
  display: flex;
  flex-direction: column;
  gap: .2rem;
  position: relative;
}

.profile-header h1 {
  font-size: 2.4rem;
}

.profile-header h2 {
  font-size: 1.8rem;
  font-weight: 400;
  color: grey;
}

.profile-body {
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
}

.follow-btn {
  position: absolute;
  right: 0;
}

.close-btn {
  background-color: transparent;
  position: absolute;
  right: 0;
  padding: 1.5rem 1.5rem 0 0;
}

button {
  font-weight: 600;
  color: white;
  background-color: var(--color-blue);
  border-radius: .5rem;
  border-width: 0;
  padding: .7rem;
}

</style>
