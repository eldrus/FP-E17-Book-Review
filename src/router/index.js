

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import about from '@/views/about.vue'
import ReviewBook from '@/views/Review.vue'
import Create from '@/views/Create.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/review/:id',
    name: 'review',
    component: ReviewBook
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router