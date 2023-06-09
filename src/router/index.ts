import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SimsennetGraph from "../views/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: SimsennetGraph
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
