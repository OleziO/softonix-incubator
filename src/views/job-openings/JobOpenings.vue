<template>
  <div class="flex w-full">
    <div
      class="w-[400px]
      text-xs text-greyrounded-sm border
    border-gray p-2 max-h-[calc(100vh-100px)]
      flex flex-col items-start"
    >
      <h5 class="uppercase text-sm">Job Openings</h5>
      <MultiSelect
        v-model="searchDeparments"
        placeholder="Select Departments"
        class="mt-2" title="Departments:"
        :items="departmentsItems"
      />

      <div class="mt-1">
        <p v-if="selectedCount && selectedCount !=totalCount">
          Showing {{ selectedCount }} out of {{ totalCount }} job openings
        </p>
        <p v-else>Showing {{ totalCount }} job openings</p>
      </div>
      <JobsOpeningsList
        :jobs="filteredJobs"
        class="my-2 overflow-y-auto h-full w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import JobsOpeningsList from './components/JobsOpeningsList.vue'

import type { IMultiSelectItem } from '@/components/multi-select/MultiSelect.vue'
import { useJobOpeningStore } from './job-openings.store'

const other = {
  name: 'Other',
  value: 'Other'
}

const searchDeparments = ref<IMultiSelectItem[]>([])

const departmentStore = useJobOpeningStore()

const searchDeparmentsNames = computed(() => searchDeparments.value.map(item => item.name))
const totalCount = computed(() => jobsArr.value.reduce((acc, item) => acc + item.count, 0))
const selectedCount = computed(() => filteredJobs.value.reduce((acc, item) => acc + item.count, 0))
const jobsArr = computed(() => Object.values(departmentStore.hashJobs))
const departmentsItems = computed(() => {
  return [...departmentStore.departments.filter(item => {
    const jobItem = departmentStore.hashJobs[item.value as keyof typeof departmentStore.hashJobs]
    return !!jobItem
  }), other]
})

const filteredJobs = computed(() => {
  const filtered = jobsArr.value.filter(item => {
    return [...searchDeparmentsNames.value, other].includes(item.name)
  })

  return [...(filtered.length ? filtered : jobsArr.value)].sort((a, b) => {
    if (a.name !== other.name && b.name !== other.name) {
      return a.name.localeCompare(b.name)
    } else {
      return 1
    }
  })
})

</script>
