class AuthService {
  #authLink = 'auth/v1'

  login (payload: IAuthRequest) {
    return useHttp.post(`${this.#authLink}/token?grant_type=password`, payload)
  }

  register (payload: IAuthRequest) {
    return useHttp.post(`${this.#authLink}/signup`, payload)
  }

  refreshToken (payload: string) {
    return useHttp.post(`${this.#authLink}/token?grant_type=refresh_token`, { refresh_token: payload })
  }
}

export const authService = new AuthService()
