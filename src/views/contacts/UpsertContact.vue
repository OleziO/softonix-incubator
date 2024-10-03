<template>
  <div class="flex justify-center">
    <el-card :title="cardTitle" class="w-[350px]">
      <div class="space-y-4">
        <el-form-item prop="name">
          <el-input v-model="contactForm.name" placeholder="Name" />
        </el-form-item>

        <el-form-item prop="description">
          <el-input v-model="contactForm.description" placeholder="Description" />
        </el-form-item>

        <el-form-item>
          <el-input v-model="contactForm.image" placeholder="Image Link" />
        </el-form-item>
      </div>

      <template #footer>
        <div class="mt-2 flex gap-2 justify-between w-full">
          <el-button :type="$elComponentType.primary" class="flex-auto" @click="$router.back">Cancel</el-button>

          <el-button
            v-if="currentContact"
            :type="$elComponentType.danger"
            class="flex-auto" @click="onDelete"
          >
            Delete
          </el-button>

          <el-button
            class="flex-auto"
            :disabled="!isFormValid"
            :type="$elComponentType.primary"
            @click="onSave"
          >
            <template #icon>
              <IconPlus class="w-5 h-5" />
            </template>
            Save
          </el-button>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { addContact, updateContact, deleteContact } = contactsStore

const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const contactForm = reactive<IContact>(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: ''
  })

const isFormValid = computed(() => {
  const { image, ...contact } = contactForm
  return Object.values(contact).every(c => !!c)
})

function onDelete () {
  deleteContact(currentContact.value as IContact)
  router.replace({ name: $routeNames.contacts })
}

function onSave () {
  if (currentContact.value) {
    updateContact(contactForm)
  } else {
    addContact(contactForm)
  }
  router.push({ name: $routeNames.contacts })
}
</script>
