import FeedsView from '@/views/FeedsView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MainLayout from '@/views/MainLayout.vue'
import ProfileView from '@/views/ProfileView.vue'
import SearchView from '@/views/SearchView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/',
      name: 'mainlayout',
      component:  MainLayout,
      children: [
        { path: '', name: 'home', component: HomeView },
        { path: 'search', name: 'search', component: SearchView },
        { path: 'feeds', name: 'feeds', component: FeedsView },
        { path: 'profile', name: 'profile', component: ProfileView },
      ]
    },
  ],
})

export default router
