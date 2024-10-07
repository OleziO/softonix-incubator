<template>
  <div class="max-w-[500px] m-auto">
    <el-card v-loading="loading">
      <template #header>
        <p class="font-semibold text-xl">{{ authTypes[authType].title }}</p>
      </template>

      <el-form
        ref="formRef"
        label-position="top"
        :rules="formRules"
        :model="formModel"
        @submit.prevent="submit"
      >
        <el-form-item label="Email" prop="email">
          <el-input v-model="formModel.email" type="email" />
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input v-model="formModel.password" type="password" />
        </el-form-item>

        <el-button
          native-type="submit"
          :type="$elComponentType.primary"
          class="w-full mb-4"
        >
          {{ authTypes[authType].title }}
        </el-button>

        <div class="flex gap-1 items-center w-full justify-center">
          <p>{{ redirectTitle }}</p>

          <RouterLink :to="`/${authType}`">
            <el-button
              text
              :type="$elComponentType.primary"
              class="!p-0"
              @click="changeAuthType"
            >
              {{ authTypes[authType].linkBtn }}
            </el-button>
          </RouterLink>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>

import { ElNotification } from 'element-plus'

const LoginErrorNonification = () => {
  ElNotification({
    title: 'Error',
    message: 'Failed to log in',
    type: 'error'
  })
}

const RegisterErrorNonification = () => {
  ElNotification({
    title: 'Error',
    message: 'Failed to sign up',
    type: 'error'
  })
}

const authTypes = {
  login: { title: 'Log In', linkBtn: 'Sing Up' },
  register: { title: 'Sign Up', linkBtn: 'Log In' }
}

const props = defineProps<{isRegister: boolean}>()

const router = useRouter()
const { $routeNames } = useGlobalProperties()
const { login, register } = useAuthStore()

const formRef = useElFormRef()

const formModel = useElFormModel({
  email: '',
  password: ''
})

const loading = ref(false)
const isRegister = ref(props.isRegister)

const authType = computed<keyof typeof authTypes>(() => isRegister.value ? 'register' : 'login')
const redirectTitle = computed(() => isRegister.value ? 'Already have an account?' : "Don't have an account yet?")

const formRules = useElFormRules({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)]
})

function submit () {
  formRef.value?.validate(isValid => {
    if (isValid) {
      loading.value = true

      if (!isRegister.value) {
        login(formModel)
          .then(() => router.push({ name: $routeNames.contacts }))
          .catch(() => { LoginErrorNonification() })
          .finally(() => (loading.value = false))
      } else {
        register(formModel)
          .then(() => router.push({ name: $routeNames.contacts }))
          .catch(() => { RegisterErrorNonification() })
          .finally(() => (loading.value = false))
      }
    }
  })
}

function changeAuthType () {
  isRegister.value = !isRegister.value
}
</script>
