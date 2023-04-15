import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/Demo.vue') },
  { path: '/hello', component: () => import('@/components/HelloWorld.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
