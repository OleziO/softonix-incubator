import axios from 'axios'
import { useAuthStore } from '@/views/auth/auth.store'
import { authService } from '@/services/auth.service'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

let refreshTokenPromise: Promise<any> | null = null // for preventing new requests until the prev has not completed

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
  res => {
    const { logout, token, setToken } = useAuthStore()

    const currTime = Math.floor(Date.now() / 1000)
    const diffTime = token.expiresAt - currTime

    function shouldRefresh () {
      return diffTime <= 60 && diffTime > 0
    } // 60 seconds before token expires

    if (token.access) {
      if (shouldRefresh() && token.refresh && !refreshTokenPromise) {
        refreshTokenPromise = authService.refreshToken(token.refresh).then(newToken => {
          setToken(newToken)
          refreshTokenPromise = null
          return newToken
        })
          .catch(() => {
            refreshTokenPromise = null
            logout()
          })
      } else if (diffTime <= 0 && !token.refresh) {
        logout()
      }
    }

    return res.data
  },
  error => {
    const { logout } = useAuthStore()

    if (error.response.status === 401) {
      logout()
    }

    return Promise.reject(error)
  }
)

export const useHttp = instance
