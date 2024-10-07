import type { RouteRecordRaw } from 'vue-router'
import Auth from '@/views/auth/Auth.vue'

export const authRoutesNames = {
  login: 'login',
  register: 'register'
}

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/register',
    name: authRoutesNames.register,
    component: Auth,
    props: { isRegister: true }
  },
  {
    path: '/login',
    name: authRoutesNames.login,
    component: Auth,
    props: { isRegister: false }
  }
]
