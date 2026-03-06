export type SafeAny = unknown

export interface ApiResponse<T = SafeAny> {
  code: number
  msg: string
  data: T
}
