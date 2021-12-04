import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ThingsToDo from '../views/ThingsToDo.vue'
import Photo from '../views/Photo.vue'
import Reviews from '../views/Reviews.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/ThingsToDo',
    name: 'ThingsToDo',
    component: ThingsToDo
  },
  {
    path: '/Reviews',
    name: 'Reviews',
    component: Reviews
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
