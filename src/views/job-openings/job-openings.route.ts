import type { RouteRecordRaw } from 'vue-router'
import JobOpenings from './JobOpenings.vue'

export const jobOpeningsRouteNames = {
  jobOpening: 'jobOpening'
}

export const jobsRoutes: RouteRecordRaw[] = [
  {
    path: '/jobOpening',
    name: jobOpeningsRouteNames.jobOpening,
    component: JobOpenings
  }
]
