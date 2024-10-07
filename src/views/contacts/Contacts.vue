<template>
  <div v-loading.fullscreen="loading" class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="logout"
    >
      Logout
    </el-button>
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="(contact, index) in contacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="onDelete($event, index)"
      @save="onEditSave($event, index)"
    />
  </div>
  <h2 v-if="!contacts.length && !loading" class="w-full text-xl text-center">No Contacts</h2>
</template>

<script lang="ts" setup>

const router = useRouter()
const { $routeNames } = useGlobalProperties()

const { logout } = useAuthStore()
const contactsStore = useContactsStore()
const { getContacts, updateContact, deleteContact } = contactsStore
const { contacts } = storeToRefs(contactsStore)

const loading = ref(false)

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function withLoading (callback: () => Promise<void>, index: number) {
  contacts.value[index].loading = true
  return callback().finally(() => { contacts.value[index].loading = false })
}

function onDelete (contact: IContact, index: number) {
  return withLoading(() => deleteContact(contact as TDeletePayload), index)
}

function onEditSave (contact: IContact, index: number) {
  return withLoading(() => updateContact(contact as TUpdatePayload), index)
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}

onMounted(() => {
  loading.value = true
  getContacts().finally(() => { loading.value = false })
})
</script>
