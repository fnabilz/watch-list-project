<script setup>
// javaScript

import { getImageUrl } from '@/utils/tmdbImage';
import { XSquareIcon } from '@lucide/vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps(['item'])
const emit = defineEmits(['close'])

</script>


<template>
    <!-- elements -->
     <div class="modal-overlay" @click.self="emit('close')">
      <div class="modal-container">
        <img :src="getImageUrl(item.poster_path)" alt="poster" class="poster"/>
        <div class="modal-content">
          <button class="close-btn" @click="emit('close')">
            <XSquareIcon></XSquareIcon>
          </button>
          <h2>{{ item.title || item.name }}</h2>
          <div class="overview">{{ item.overview }}</div>
          <div class="rating">⭐ {{ Number(item.vote_average).toFixed(1) }}</div>
          <button class="add-btn">
            Add to Watch List
          </button>

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
  padding: 3rem 0 0 0;
  justify-content: center;
  z-index: 1000;
}

.modal-container {
  background: white;
  border-radius: 1rem;
  max-width: 500px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
}

.modal-content {
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  overflow-y: auto;
  text-align: justify;
  overflow: hidden;
  max-height: 12rem;
}

.modal-container h2 {
  font-size: 1.6rem;
  padding: 0 0 1rem 0;
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
