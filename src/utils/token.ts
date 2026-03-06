const TOKEN_KEY = 'demo_token'

export function getToken() {
  return globalThis.localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string) {
  globalThis.localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  globalThis.localStorage.removeItem(TOKEN_KEY)
}
