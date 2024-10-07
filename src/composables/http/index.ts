import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  config => {
    const { token } = useAuthStore()

    if (token.access) {
      config.headers.authorization = `Bearer ${token.access}`
    }
    return config
  }
)

instance.interceptors.response.use(
  res => res.data,
  async error => {
    const { logout, token, setToken } = useAuthStore()

    if (error.response.status === 401) {
      const currTime = Math.floor(Date.now() / 1000)

      if (token.expiresAt && currTime >= token.expiresAt) {
        if (token.refresh) {
          const res = await authService.refreshToken(token.refresh)

          setToken(res)

          // logout()
        }
      }
    }

    return Promise.reject(error)
  }
)

export const useHttp = instance
