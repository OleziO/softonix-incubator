<template>
  <ContactItem
    isNew
    :contact="contact"
    @cancel="cancel"
    @save="$emit('createContact', $event)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactItem from './ContactItem.vue'

defineEmits(['createContact'])

const isCreateMode = defineModel<boolean>()

const contact = ref({
  id: -1,
  name: '',
  description: '',
  image: ''
})

function cancel () {
  if (window.confirm('Are you sure you want to cancel creating this contact?')) {
    isCreateMode.value = false
  }
}

</script>
