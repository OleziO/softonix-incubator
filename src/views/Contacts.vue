<template>
  <div class="header-section">
    <h3 class="font-medium m-0">Contact list</h3>

    <AppButton @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>

      Add Contact
    </AppButton>
  </div>

  <div class="header-section my-4">
    <SearchInput v-model="search" v-model:filtered-contacts="filteredContacts" />
    <MultiSelect v-model="selectedFilters" :items="roles" />
    <AppButton class="min-w-[128px] capitalize" @click="onChangeSortOrder">{{ selectedSortOption }}</AppButton>
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in filteredContacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useContactsStore } from '@/store'

import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import SearchInput from '@/components/SearchInput.vue'
import MultiSelect from '@/components/MultiSelect.vue'
import { computed, ref } from 'vue'
import type { IContact } from '@/types'

const router = useRouter()

const contactsStore = useContactsStore()
const { contacts, roles } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

const selectedFilters = ref<string[]>([])
const search = ref('')

const sortOptions = {
  ascending: (a: string, b: string) => a.localeCompare(b),
  descending: (a: string, b: string) => b.localeCompare(a),
  default: () => 0
}

const selectedSortOption = ref<keyof typeof sortOptions>('default')

const onChangeSortOrder = () => {
  switch (selectedSortOption.value) {
    case 'ascending':
      selectedSortOption.value = 'descending'
      break
    case 'descending':
      selectedSortOption.value = 'default'
      break
    default:
      selectedSortOption.value = 'ascending'
      break
  }
}

const filteredContacts = computed(() => {
  const strSearch = (source: string) => {
    return source.trim().toLowerCase().includes(search.value.toLocaleLowerCase())
  }

  const filterSearch = (item: IContact) => {
    return selectedFilters.value.includes(item.role)
  }

  return [...contacts.value.filter(item => {
    return (strSearch(item.name) || strSearch(item.description)) &&
    (!selectedFilters.value.length || filterSearch(item))
  })].sort((a: IContact, b: IContact) => {
    return sortOptions[selectedSortOption.value](a.name, b.name)
  })
})

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}
</script>

<style scoped>
.header-section {
  @apply flex justify-between items-center gap-4;
}
</style>
