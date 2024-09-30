import type { RouteRecordRaw } from 'vue-router'

import { jobOpeningsRouteNames, jobsRoutes } from '@/views/job-openings/job-openings.route'
import { contactsRoutes } from '@/views/contacts/contacts.routes'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: jobOpeningsRouteNames.jobOpening }
  },

  ...contactsRoutes,
  ...jobsRoutes
]
