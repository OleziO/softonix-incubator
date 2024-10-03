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
        <p v-if="searchDeparments.length && selectedCount !=totalCount">
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

const other: IDepartment = {
  name: 'Other',
  value: 'other'
}
const departmentStore = storeToRefs(useJobOpeningStore())

const searchDeparments = ref<IMultiSelectItem[]>([])

const totalCount = computed(() => {
  const allItems = jobsArr.value.flatMap(jobs => jobs.items)

  return allItems.length
})
const selectedCount = computed(() => filteredJobs.value.reduce((acc, item) => acc + item.items.length, 0))

const departmentsItems = computed(() => {
  return [...departmentStore.departments.value.filter(item => !!departmentStore.hashJobs.value[item.value]), other]
})
const searchDeparmentsNames = computed(() => searchDeparments.value.map(item => item.value))

const jobsArr = computed(() => Object.values(departmentStore.hashJobs.value))
const filteredJobs = computed(() => {
  let filtered: IGroupedJobs[] = [...jobsArr.value]

  if (searchDeparmentsNames.value.length) {
    filtered = jobsArr.value.filter(item => {
      return [...searchDeparmentsNames.value].includes(item.name)
    })
  }

  return filtered.sort((a, b) => {
    if (a.name !== other.value && b.name !== other.value) {
      return a.name.localeCompare(b.name)
    } else {
      return 1
    }
  })
})

</script>
