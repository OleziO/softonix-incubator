<template>
  <div class="flex justify-center">
    <Card v-loading="loading" :title="cardTitle" class="w-[350px]">
      <div class="space-y-4">
        <AppInput v-model.trim="contactForm.name" placeholder="Name" />

        <AppInput v-model.trim="contactForm.description" placeholder="Description" />

        <AppInput
          v-if="currentContact"
          v-model.trim="(contactForm as IContact).image" placeholder="Image Link"
        />
      </div>

      <template #footer>
        <div class="px-6 pb-6 mt-2 flex gap-3">
          <AppButton class="flex-auto" @click="$router.back">
            Cancel
          </AppButton>

          <AppButton v-if="currentContact" class="flex-auto" @click="onDelete">
            Delete
          </AppButton>

          <AppButton class="flex-auto" :disabled="!isFormValid" @click="onSave">
            <template #icon>
              <IconPlus class="w-5 h-5" />
            </template>

            Save
          </AppButton>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { addContact, updateContact, deleteContact } = contactsStore

const loading = ref(false)
const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const contactForm = reactive<IContact | TNewContactPayload>(currentContact.value
  ? { ...currentContact.value }
  : {
    name: '',
    description: ''
  })

const isFormValid = computed(() => {
  const { ...contact } = contactForm
  return Object.values(contact).every(c => !!c)
})

function onDelete () {
  loading.value = true

  deleteContact(currentContact.value as TDeletePayload)
    .then(() => {
      router.replace({ name: $routeNames.contacts })
    })
    .finally(() => {
      loading.value = false
    })
}

async function onSave () {
  loading.value = true

  try {
    if (currentContact.value) {
      await updateContact(contactForm as IContact)
    } else {
      await addContact(contactForm as TNewContactPayload)
    }

    router.replace({ name: $routeNames.contacts })
  } finally {
    loading.value = false
  }
}
</script>
