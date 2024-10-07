import { routeNames, router } from '@/router'

interface IToken {
  access: string
  refresh?: string
  expiresAt: number
}

export const useAuthStore = defineStore('authStore', () => {
  const token = ref<IToken>(JSON.parse(localStorage.getItem('si-token')) || {
    access: '',
    refresh: '',
    expiresAt: 0
  })

  function setToken (res) {
    token.value = {
      access: res.access_token,
      refresh: res.refresh_token,
      expiresAt: res.expires_at
    }
    localStorage.setItem('si-token', JSON.stringify(token.value))
  }

  function login (payload: IAuthRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res)
      })
  }

  function register (payload: IAuthRequest) {
    return authService.register(payload)
      .then((res) => {
        setToken(res)
      })
  }

  function logout () {
    localStorage.removeItem('si-token')
    window.location.href = router.resolve(routeNames.login).href
  }

  return {
    token,
    register,
    login,
    logout,
    setToken
  }
})
