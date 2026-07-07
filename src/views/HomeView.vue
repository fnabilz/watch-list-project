<script setup>
// javaScript

import { PlusSquareIcon } from '@lucide/vue';

</script>


<template>
    <!-- elements -->
    <div class="main-container">
      <h1>Layan later?</h1>

      <div class="grid-container">
        <button class="card">
          <PlusSquareIcon class="icon"/>
          <span>Add movie</span>
        </button>
      </div>
    </div>

</template>


<style scoped>
/* styling */

.main-container {
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0 0 6.5rem 0;
}

h1 {
  padding: 4rem 0 2rem 3rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  align-content: start;
  box-sizing: border-box;
}

.card {
  border-radius: 2rem;
  height: 25rem;
  width: 1fr;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, .1);
  background: linear-gradient(135deg,rgba(173, 180, 199, 1) 0%, rgba(242, 242, 242, 1) 100%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon {
    color: black;
    width: 4rem;
    height: 4rem;
}

.card span {
  font-size: medium;
  padding: 1rem 0 0 0;
  font-weight: bold;
  color: black;
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
