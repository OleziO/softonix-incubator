import { defineStore } from 'pinia'
import { ref } from 'vue'

import { jobOpenings as mockJobOpenings, type IJobOpening } from '@/_homework/job-openings'
import type { IGroupedJobs } from '@/views/job-openings/JobOpenings.vue'

export const useJobsStore = defineStore('jobsStore', () => {
  const jobs = ref<IJobOpening[]>(mockJobOpenings)
  const hashJobs = computed(() => groupJobsByDepartment(jobs.value))

  function groupJobsByDepartment (jobs: IJobOpening[]): IGroupedJobs[] {
    const groupedJobs: Record<string, IGroupedJobs> = {}
    const otherJobs: IGroupedJobs = { name: 'Other', count: 0, jobs: [] }
    const departmentStore = useDepartmentsStore()

    jobs.forEach((job) => {
      let isGrouped = false

      job.departments.forEach((department) => {
        const departmentData = departmentStore.hashDepartments[department]

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

      if (!isGrouped) {
        otherJobs.jobs.push(job)
        otherJobs.count++
      }
    })

    return [...Object.values(groupedJobs), otherJobs]
  }

  return {
    departments,
    hashDepartments
  }
})
