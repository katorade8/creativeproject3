import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ThingsToDo from '../views/ThingsToDo.vue'

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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
