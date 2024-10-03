<template>
  <el-table
    height="100%"
    :data="contacts"
    row-key="id"
    empty-text="No Data"
    style="width: 100%;"
    @row-click="onItemClick"
  >
    <el-table-column
      width="130"
      label="Contact Avatar"
    >
      <template #default="{row}">
        <ContactAvatar
          :image="row.image"
          :name="row.name"
        />
      </template>
    </el-table-column>

    <el-table-column
      width="200"
      prop="name"
      label="Name"
    >
      <template #default="scope">
        <el-input v-if="checkIsEdit(scope.row)" v-model="localContact.name" @click.stop />
        <template v-else>{{ scope.row.name }}</template>
      </template>
    </el-table-column>

    <el-table-column
      prop="description"
      label="Description"
      class="truncate"
    >
      <template #default="scope">
        <el-input
          v-if="checkIsEdit(scope.row)"
          v-model="localContact.description"
          @click.stop
        />
        <div
          v-else
          class="truncate"
        >
          {{ scope.row.description }}
        </div>
      </template>
    </el-table-column>

    <el-table-column
      label="Actions"
      fixed="right"
      width="150"
    >
      <template #default="scope">
        <div class="flex">
          <template v-if="checkIsEdit(scope.row)">
            <el-button
              @click.stop="onCancel"
            >
              Cancel
            </el-button>

            <el-button
              :type="$elComponentType.primary"
              @click.stop="onItemSave(localContact)"
            >
              Save
            </el-button>
          </template>

          <template v-else>
            <el-button
              :type="$elComponentType.danger"
              @click.stop="onItemDelete(scope.row)"
            >
              Delete
            </el-button>

            <el-button
              :type="$elComponentType.primary"
              @click.stop="onEdit(scope.row)"
            >
              Edit
            </el-button>
          </template>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
defineProps<{
  contacts: IContact[]
}>()

const emit = defineEmits(['itemDelete', 'itemSave', 'itemClick'])

const inputRef = ref<HTMLInputElement>()
const editMode = ref(false)

const localContact = useElFormModel<IContact>({
  id: -1,
  name: '',
  description: '',
  image: ''
})

async function triggerEditMode (contact: IContact) {
  editMode.value = true

  localContact.id = contact.id
  localContact.name = contact.name
  localContact.description = contact.description
  localContact.image = contact.image

  await nextTick()
  inputRef.value?.focus()
}

function checkIsEdit (item: IContact) {
  return editMode.value && localContact.id === item.id
}

function onCancel () {
  editMode.value = false
}

function onEdit (contact: IContact) {
  editMode.value = true
  triggerEditMode(contact)
}

function onItemSave (contact: IContact) {
  emit('itemSave', contact)
  editMode.value = false
}

function onItemClick (contact: IContact) {
  if (!editMode.value) {
    emit('itemClick', contact.id)
  }
}

function onItemDelete (contact: IContact) {
  emit('itemDelete', contact)
}
</script>
