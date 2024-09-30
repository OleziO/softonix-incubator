<template>
  <div class="flex w-full">
    <div
      class="min-w-[400px]
      text-xs text-greyrounded-sm border
    border-gray p-2 max-h-[calc(100vh-100px)]
      overflow-y-hidden"
    >
      <h5 class="uppercase text-sm">Job Openings</h5>
      <MultiSelect
        v-model="searchDeparments"
        placeholder="Select Departments"
        class="mt-2" title="Departments:"
        :items="[...departments, other]"
      />

      <div class="mt-1">
        <p v-if="selectedCount && selectedCount !=totalCount">
          Showing {{ selectedCount }} out of {{ totalCount }} job openings
        </p>
        <p v-else>Showing {{ totalCount }} job openings</p>
      </div>
      <JobsOpeningsList
        :jobs="filteredJobs"
        class="my-2 overflow-y-auto h-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import JobsOpeningsList from './components/JobsOpeningsList.vue'

import { departments } from '@/_homework/departments'
import { type IJobOpening } from '@/_homework/job-openings'
import type { IMultiSelectItem } from '@/components/multi-select/MultiSelect.vue'
import { useDepartmentsStore } from './job-openings.store'

export interface IGroupedJobs {
  name: string
  count: number
  jobs: IJobOpening[]
}
const other = {
  name: 'Other',
  value: 'Other'
}

const searchDeparments = ref<IMultiSelectItem[]>([])

const departmentStore = useDepartmentsStore()

const searchDeparmentsNames = computed(() => searchDeparments.value.map(item => item.name))
const totalCount = computed(() => departmentStore.hashJobs.reduce((acc, item) => acc + item.count, 0))
const selectedCount = computed(() => filteredJobs.value.reduce((acc, item) => acc + item.count, 0))

const filteredJobs = computed(() => {
  const filtered = departmentStore.hashJobs.filter(item => {
    return [...searchDeparmentsNames.value, other].includes(item.name)
  })

  return [...(filtered.length ? filtered : departmentStore.hashJobs)].sort((a, b) => {
    if (a.name !== other.name && b.name !== other.name) {
      return a.name.localeCompare(b.name)
    } else {
      return 1
    }
  })
})

</script>
