import { computed, type Ref } from 'vue'

export const useValidation = (
  formData: Ref<Record<string, string>>,
  validationData: Record<string, any>
) => {
  const rulesConfig: Record<string, any> = {
    required: (str: string, required: boolean) => !!str.trim().length === required,
    minLength: (str: string, length: number) => str.length >= length,
    minWords: (str: string, wordsAmount: number) => str.trim().split(/\s+/).length >= wordsAmount,
    pattern: (str: string, pattern: RegExp) => pattern.test(str)
  }
  const isValid = computed(() => {
    for (const field in validationData) {
      if (!validate(formData.value[field], validationData[field])) {
        return false
      }
    }
    return true
  })

  const validate = (value: string, rules: Record<string, any>) => {
    for (const rule in rules) {
      if (!rulesConfig[rule](value, rules[rule])) {
        return false
      }
    }
    return true
  }

  return { isValid }
}
