<template>
  <div class="max-w-[1440px] p-6">
    <div class="flex gap-4 items-center">
      <h3 class="font-medium m-0">Contact list</h3>
      <button
        type="button"
        class="bg-blue-500 cursor-pointer text-warmGray-50
        rounded-xl py-2 px-4 disabled:bg-blue-200 disabled:cursor-not-allowed"
        :disabled="isCreateMode"
        @click="isCreateMode = true"
      >
        Add contact
      </button>
    </div>

    <div class="contact-list grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
      <NewContactItem v-if="isCreateMode" v-model="isCreateMode" @createContact="createContact" />
      <ContactItem
        v-for="(contact, index) in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="deleteContact(index, !!contact.id)"
        @save="onContactSave($event, index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IContact } from '@/types'
import ContactItem from '@/components/ContactItem.vue'
import NewContactItem from './components/NewContactItem.vue'

const contacts = ref<IContact[]>([
  {
    id: 1,
    name: 'Esther Howard',
    description: 'Forward Response Developer',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 2,
    name: 'Jane Cooper',
    description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 3,
    name: 'Cody Fisher',
    description: 'Product Directives Officer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
])

const isCreateMode = ref(false)

function deleteContact (index: number, shouldConfirm: boolean) {
  if (!shouldConfirm || window.confirm('Are you sure you want to delete this contact?')) {
    contacts.value.splice(index, 1)
  }
}

function createContact (contact: IContact) {
  contacts.value.unshift({ ...contact, id: contacts.value.length })
  isCreateMode.value = false
}

function onContactSave (contact: IContact, index: number) {
  contacts.value[index] = { ...contact }
}
</script>
