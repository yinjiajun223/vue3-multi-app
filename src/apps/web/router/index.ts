import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import WebAboutPage from '../pages/WebAboutPage.vue'
import WebHomePage from '../pages/WebHomePage.vue'
import WebLoginPage from '../pages/WebLoginPage.vue'
import WebRequestTestPage from '../pages/WebRequestTestPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'web-home', component: WebHomePage },
  { path: '/about', name: 'web-about', component: WebAboutPage },
  { path: '/request-test', name: 'web-request-test', component: WebRequestTestPage },
  { path: '/login', name: 'web-login', component: WebLoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
