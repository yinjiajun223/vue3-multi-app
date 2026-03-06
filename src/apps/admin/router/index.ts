import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import AdminDashboardPage from '../pages/AdminDashboardPage.vue'
import AdminLoginPage from '../pages/AdminLoginPage.vue'
import AdminRequestTestPage from '../pages/AdminRequestTestPage.vue'
import AdminUsersPage from '../pages/AdminUsersPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'admin-dashboard', component: AdminDashboardPage },
  { path: '/users', name: 'admin-users', component: AdminUsersPage },
  { path: '/request-test', name: 'admin-request-test', component: AdminRequestTestPage },
  { path: '/login', name: 'admin-login', component: AdminLoginPage },
]

const router = createRouter({
  history: createWebHistory('/admin.html'),
  routes,
})

export default router
