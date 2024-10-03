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
    const otherJobs: Record<string, IGroupedJobs> = {
      other: { name: customDepartment.extendedDepartmentsOther.value, items: [] }
    }

    return jobs.value.reduce((acc, job) => {
      job.departments.forEach((department) => {
        const departmentData = hashDepartments.value[department]

        if (departmentData) {
          const { value } = departmentData

          if (!acc[value]) {
            acc[value] = { name: value, items: [] }
          }

          acc[value].items.push(job)
        }
      })

      if (!job.departments.length) {
        acc.other.items.push(job)
      }

      return acc
    }, { ...otherJobs })
  })

  return {
    departments,
    hashDepartments,
    jobs,
    hashJobs
  }
})
