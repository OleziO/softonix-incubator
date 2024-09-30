import { jobOpeningsRouteNames } from '@/views/job-openings/job-openings.route'
import { contactRouteNames } from '@/views/contacts/contacts.routes'
export const routeNames = {
  ...contactRouteNames,
  ...jobOpeningsRouteNames
}
