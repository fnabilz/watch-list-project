import DiscoverView from '@/views/DiscoverView.vue'
import FeedsView from '@/views/FeedsView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MainLayout from '@/views/MainLayout.vue'
import ProfileView from '@/views/ProfileView.vue'
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
        { path: 'discover', name: 'discover', component: DiscoverView },
        { path: 'feeds', name: 'feeds', component: FeedsView },
        { path: 'profile', name: 'profile', component: ProfileView },
      ]
    },
  ],
})

export default router
