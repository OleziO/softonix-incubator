<template>
  <div ref="jobItemRef">
    <button @click="toggleShowList">
      <h5 class="font-bold text-sm">{{ department.name }} ({{ department.count }})</h5>
    </button>

    <div v-if="shoulListShowing" class="text-xs text-blue-500 pl-4 border-l border-gray mb-1">
      <ul>
        <li
          v-for="(visibleJob, index) in visibleJobs(department)"
          :key="index" class="mt-1 relative"
        >
          <div class="absolute bg-gray w-2 h-px -left-4 top-1/2 -translate-y-1/2" />
          <div class="flex gap-1 items-center">
            <div
              class="w-1.5 h-1.5 bg-green-500 rounded-full"
              :class="{'bg-red-500': visibleJob.isClosed}"
            />
            <a :href="visibleJob.url" target="_blank">{{ visibleJob.title }}</a>
          </div>
        </li>
      </ul>

      <button
        v-if="department.count > jobDisplayLimit"
        class="font-bold mt-1 relative"
        @click="toggleShowMore()"
      >
        <div class="absolute bg-gray w-2 h-px -left-4 top-1/2 -translate-y-1/2" />
        {{ showMore ? 'See less' : 'See more' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IGroupedJobs } from '../job-openings'

defineProps<{
  department: IGroupedJobs
}>()
const jobDisplayLimit = 5

const showMore = ref(false)
const shoulListShowing = ref(true)

const visibleJobs = (department: IGroupedJobs) => {
  return department.count > jobDisplayLimit && !showMore.value
    ? department.jobs.slice(0, jobDisplayLimit)
    : department.jobs
}

function toggleShowList () {
  shoulListShowing.value = !shoulListShowing.value
}

const toggleShowMore = () => {
  showMore.value = !showMore.value
}
</script>
