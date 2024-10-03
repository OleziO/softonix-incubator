<template>
  <el-card body-style="padding: 0;">
    <div class="p-5">
      <div class="flex">
        <div class="flex flex-grow flex-col text-sm truncate" @click.stop>
          <template v-if="editMode">
            <el-input
              ref="inputRef"
              v-model="localContact.name"
              size="small"
              class="font-medium w-full"
            />

            <el-input
              v-model="localContact.description"
              size="small"
              class="mt-1 text-gray w-full"
            />
          </template>

          <template v-else>
            <p class="leading-[24px] font-medium cursor-text">{{ contact.name }}</p>
            <p class="leading-[24px] text-gray cursor-text mt-1 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>

        <ContactAvatar class="ml-2" :name="contact.name" :image="contact.image" />
      </div>

      <div class="flex justify-end mt-2.5 gap-2">
        <template v-if="editMode">
          <el-button
            text
            size="small"
            :type="$elComponentType.primary"
            @click.stop="editMode = false"
          >
            Cancel
          </el-button>

          <el-button
            text
            size="small"
            :type="$elComponentType.primary"
            class="!ml-0"
            @click.stop="onSave"
          >
            Save
          </el-button>
        </template>

        <template v-else>
          <el-button
            text
            size="small"
            :type="$elComponentType.primary"
            @click.stop="triggerEditMode"
          >
            Edit
          </el-button>

          <el-button
            text
            size="small"
            :type="$elComponentType.danger"
            class="!ml-0"
            @click.stop="$emit('delete', contact)"
          >
            Delete
          </el-button>
        </template>
      </div>
    </div>

    <div
      class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light"
      @click.stop
    >
      <el-button text class="flex-1" size="default">
        <el-icon class="el-icon--left">
          <IconEnvelope />
        </el-icon>
        <span class="ml-3">Email</span>
      </el-button>

      <el-button text class="flex-1" size="default">
        <el-icon class="el-icon--left">
          <IconPhone />
        </el-icon>

        <span class="ml-3">Call</span>
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<IContact>({
  id: -1,
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }

  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}
</script>
