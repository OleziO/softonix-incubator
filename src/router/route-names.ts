import { jobOpenings } from '@/_homework/job-openings'
import { contactsRoutes } from '@/views/contacts/contacts.routes'
export const routeNames = {
  ...contactsRoutes,
  ...jobOpenings
}
