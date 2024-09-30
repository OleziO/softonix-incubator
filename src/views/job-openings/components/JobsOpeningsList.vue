<template>
  <div>
    <div v-for="job in jobs" :key="job.name">
      <JobsOpeningsListItem :department="job" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IGroupedJobs } from '../job-openings'
import JobsOpeningsListItem from './JobsOpeningsListItem.vue'

defineProps<{
  jobs: IGroupedJobs[]
}>()
</script>
