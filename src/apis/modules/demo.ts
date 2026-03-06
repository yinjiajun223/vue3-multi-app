import { Get } from '@/apis/axios'

export interface UserItem {
  id: number
  name: string
  role: string
}

export interface MockUsersData {
  list: UserItem[]
}

export interface MockStatsData {
  visits: number
  today: number
}

export function getMockUsers() {
  return Get<MockUsersData>('/mock/users.json')
}

export function getMockStats() {
  return Get<MockStatsData>('/mock/stats.json')
}
