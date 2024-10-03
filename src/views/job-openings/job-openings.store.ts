import { defineStore } from 'pinia'
import { ref } from 'vue'

import { generalService } from '@/services/general.service'
import { departments as mockDepartments } from '@/_homework/departments'
import { jobOpenings as mockJobs } from '@/_homework/job-openings'
import { customDepartment } from './job-openings.service'

export const useJobOpeningStore = defineStore('jobOpeningStore', () => {
  const departments = ref<IDepartment[]>(mockDepartments)
  const hashDepartments = computed(() => generalService.arrayToObject(departments.value, 'value'))
  const jobs = ref<IJobOpening[]>(mockJobs)

  const hashJobs = computed(() => {
    const groupedJobs: Record<string, IGroupedJobs> = {}
    const otherJobs: Record<string, IGroupedJobs> = {
      other: { name: customDepartment.extendedDepartmentsOther.value, items: [] }
    }

    jobs.value.forEach((job) => {
      job.departments.forEach((department) => {
        const departmentData = hashDepartments.value[department]

        if (departmentData) {
          const { value } = departmentData

          if (!groupedJobs[value]) {
            groupedJobs[value] = { name: value, items: [] }
          }

          groupedJobs[value].items.push(job)
        }
      })

      if (!job.departments.length) {
        otherJobs.other.items.push(job)
      }
    })

    return { ...groupedJobs, ...otherJobs }
  })

  return {
    departments,
    hashDepartments,
    jobs,
    hashJobs
  }
})
