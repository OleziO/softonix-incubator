<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex gap-2">
        <div class="flex-grow text-sm truncate pr-4">
          <template v-if="isEditMode">
            <input
              ref="inputRef"
              v-model="localContact.name"
              placeholder="Name"
              type="text"
              class="block font-medium w-full"
            >
            <input
              v-model="localContact.description"
              placeholder="Description" type="text" class="block mt-1
            text-gray w-full"
            >
          </template>

          <template v-else>
            <p class="font-medium">{{ contact.name }}</p>
            <p class="text-gray mt-1 truncate">
              {{ localContact.description }}
            </p>
          </template>
        </div>
        <div
          class="flex justify-center items-center shrink-0 w-[40px] h-[40px] group
          relative after:absolute after:bg-[#000000AA] after:w-[40px] after:h-[40px]
          after:top-0 after:left-0 after:rounded-full after:hidden"
          :class="{'hover:after:flex hover:cursor-pointer': isEditMode}"
        >
          <img
            class="object-cover rounded-full"
            :src="localContact.image || IconPicture" alt="contact-logo"
          >
          <button class="absolute hidden group-hover:block z-10 w-[20px] h-[20px]" @click="changeImage">
            <img v-if="isEditMode" :src="IconPlus">
          </button>
        </div>
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="isEditMode">
          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="onCancel"
          >
            Cancel
          </button>

          <button
            class="text-blue-500 disabled:text-blue-200 ddisabled:cursor-not-allowed
            font-medium text-xs cursor-pointer hover:underline"
            :disabled="!isValid"
            @click="onSave"
          >
            Save
          </button>
        </template>

        <template v-else>
          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerisEditMode"
          >
            Edit
          </button>

          <button
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >
            Delete
          </button>
        </template>
      </div>
    </div>

    <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <button class="ml-3">Email</button>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <button class="ml-3">Call</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { useValidation } from '@/composables/useValidation'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import IconPicture from '@/assets/images/icon-picture.svg'
import IconPlus from '@/assets/images/icon-plus.svg'

const props = defineProps<{
  contact: IContact
  isNew?: boolean
}>()

const emit = defineEmits(['delete', 'save', 'cancel'])

const validationRules = {
  name: {
    required: true,
    minLength: 5,
    pattern: /[A-Z]/
  },
  description: {
    required: true,
    minLength: 20,
    minWords: 2
  }
}

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  ...props.contact
})

const { isValid } = useValidation(localContact, validationRules)

const isEditMode = ref(!!props.isNew)

async function triggerisEditMode () {
  isEditMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function changeImage () {
  const image = window.prompt('Enter image URL: ')

  if (image) {
    localContact.value.image = image
  }
}

function onSave () {
  emit('save', localContact.value)
  isEditMode.value = false
}

function onCancel () {
  isEditMode.value = false
  emit('cancel')
}
</script>
