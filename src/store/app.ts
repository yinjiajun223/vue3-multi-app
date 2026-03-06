import { defineStore } from 'pinia'

interface AppState {
  requestCount: number
  lastMessage: string
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    requestCount: 0,
    lastMessage: '',
  }),
  actions: {
    markRequest(message: string) {
      this.requestCount += 1
      this.lastMessage = message
    },
  },
})
