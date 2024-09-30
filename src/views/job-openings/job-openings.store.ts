import { defineStore } from 'pinia'
import { ref } from 'vue'

import { generalService } from '@/services/general.service'
import { departments as mockDepartments, type IDepartment } from '@/_homework/departments'
import { jobOpenings as mockJobs, type IJobOpening } from '@/_homework/job-openings'
import type { IGroupedJobs } from './job-openings'

export const useJobOpeningStore = defineStore('jobOpeningStore', () => {
  const departments = ref<IDepartment[]>(mockDepartments)
  const hashDepartments = computed(() => generalService.arrayToObject(departments.value, 'value'))
  const jobs = ref<IJobOpening[]>(mockJobs)

  const hashJobs = computed(() => {
    const groupedJobs: Record<string, IGroupedJobs> = {}
    const otherJobs: IGroupedJobs = { name: 'Other', count: 0, jobs: [] }

    jobs.value.forEach((job) => {
      let isGrouped = false

      job.departments.forEach((department) => {
        const departmentData = hashDepartments.value[department]

        if (departmentData) {
          const { value, name } = departmentData

          if (!groupedJobs[value]) {
            groupedJobs[value] = { name, count: 0, jobs: [] }
          }

          groupedJobs[value].jobs.push(job)
          groupedJobs[value].count++
          isGrouped = true
        }
      })

      if (!isGrouped && job.departments.length) {
        otherJobs.jobs.push(job)
        otherJobs.count++
      }
    })

    return { ...groupedJobs, other: otherJobs }
  })

  return {
    departments,
    hashDepartments,
    jobs,
    hashJobs
  }
})
