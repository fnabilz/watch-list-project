<script setup>
// javaScript

import { } from '@lucide/vue';

</script>


<template>
    <!-- elements -->
    <div class="main-container">

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
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
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
