<script setup>
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { RouterView } from 'vue-router';

</script>

<template>
  <header>

  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style>
  :root {
    --color-yellow: #FFFFE3;
    --color-blue:   #6D8196;
    --color-grey-1: #CBCBCB;
    --color-grey-2: #4A4A4A;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  * {
    font-family: 'Roboto';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

</style>
