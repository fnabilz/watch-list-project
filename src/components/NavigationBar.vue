<script setup>
import { HomeIcon, Search, SquareGanttChartIcon, UserRoundIcon } from '@lucide/vue';
import { RouterLink } from 'vue-router';

// javaScript
const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: HomeIcon,
  },
  {
    name: 'Search',
    path: '/search',
    icon: Search,
  },
  {
    name: 'Feeds',
    path: '/feeds',
    icon: SquareGanttChartIcon,
  },
  {
    name: 'profile',
    path: '/profile',
    icon: UserRoundIcon,
  },
]


</script>


<template>
    <!-- elements -->
    <div class="div-container">

      <RouterLink v-for="page in navItems" :key="page.name" :to='page.path' class="nav-button">
        <component :is="page.icon" class="icon"/>
        <span class="nav-label">
          {{ page.name }}
        </span>
      </RouterLink>

    </div>
</template>


<style scoped>
/* styling */
.div-container {
  background-color: var(--color-blue);
  height: 6.5rem;
  width: 100vw;
  position: absolute;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, .2);
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
}



.nav-button {
  width: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 0;
  font-weight: bold;
  color: azure;
  gap: .3rem;

  font-size: 0;
  transition: font-size .5s ease;
  border-bottom: .3rem solid transparent;
  transition: border-bottom-color .5s ease;
}

.icon {
  filter: brightness(.7);
  width: 2.5rem;
  height: 2.5rem;
  transition: filter .5s ease;
}

.router-link-exact-active {
  .icon {
    filter: brightness(1);
  }

  font-size: 1.1rem;
  border-bottom-color: azure;
}



</style>
