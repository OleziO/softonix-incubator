<template>
  <div ref="jobItemRef">
    <button @click="toggleShowList">
      <h5 class="font-bold text-sm">
        {{ name ? name.name : customDepartment.extendedDepartmentsOther.name }} ({{ count }})
      </h5>
    </button>

    <div v-if="shoulListShowing" class="text-xs text-blue-500 pl-4 border-l border-gray mb-1">
      <ul>
        <li
          v-for="(visibleJob, index) in visibleJobs(department.items)"
          :key="index" class="mt-1 relative max-w-full"
        >
          <div class="absolute bg-gray w-2 h-px -left-4 top-1/2 -translate-y-1/2" />
          <div class="flex gap-1 items-center">
            <div
              class="w-1.5 h-1.5 bg-green-500 rounded-full"
              :class="{'bg-red-500': visibleJob.isClosed}"
            />
            <a :href="visibleJob.url" target="_blank" class="truncate">{{ visibleJob.title }}</a>
          </div>
        </li>
      </ul>

      <button
        v-if="count > jobDisplayLimit"
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
import { customDepartment } from '../job-openings.service'

const props = defineProps<{
  department: IGroupedJobs
}>()
const jobDisplayLimit = 5

const departmentStore = storeToRefs(useJobOpeningStore())

const showMore = ref(false)
const shoulListShowing = ref(true)

const name = computed(() => departmentStore.hashDepartments.value[props.department.name])
const count = computed(() => props.department.items.length)

const visibleJobs = (jobs: IJobOpening[]) => {
  return count.value > jobDisplayLimit && !showMore.value
    ? jobs.slice(0, jobDisplayLimit)
    : jobs
}

function toggleShowList () {
  shoulListShowing.value = !shoulListShowing.value
}

const toggleShowMore = () => {
  showMore.value = !showMore.value
}
</script>
