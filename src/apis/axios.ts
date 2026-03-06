import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { ApiResponse, SafeAny } from '@/apis/common/index.type'

import axios from 'axios'
import { ElMessage } from 'element-plus'

import { clearToken, getToken } from '@/utils/token'

function isApiResponse<T>(payload: unknown): payload is ApiResponse<T> {
  if (!payload || typeof payload !== 'object') {
    return false
  }

  return 'code' in payload && 'msg' in payload
}

function getLoginPath() {
  const adminLoginPath = import.meta.env.VITE_ADMIN_LOGIN_PATH || '/admin.html/login'
  const webLoginPath = import.meta.env.VITE_WEB_LOGIN_PATH || '/login'

  if (globalThis.location.pathname.includes('admin.html')) {
    return adminLoginPath
  }

  return webLoginPath
}

function notifyError(text: string) {
  ElMessage.error(text)
}

function handleUnauthorized() {
  clearToken()
  globalThis.location.href = getLoginPath()
}

function unwrapResponseData<T>(payload: unknown): T {
  if (!isApiResponse<T>(payload)) {
    return payload as T
  }

  if (payload.code !== 0 && payload.code !== 200) {
    if (payload.code === 401) {
      handleUnauthorized()
    }

    notifyError(payload.msg || '请求失败')
    throw new Error(payload.msg || '请求失败')
  }

  return payload.data
}

async function requestWithUnwrap<T = SafeAny>(
  instance: AxiosInstance,
  config: AxiosRequestConfig,
): Promise<T> {
  const response = await instance.request<unknown, AxiosResponse<unknown>>(config)
  return unwrapResponseData<T>(response.data)
}

export const Request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

Request.interceptors.request.use((config) => {
  const token = getToken()

  if (token) {
    config.headers.Authorization = token
  }

  return config
})

Request.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error?.response?.status === 401) {
      handleUnauthorized()
    }
    else {
      notifyError(error?.message || '网络异常')
    }

    return Promise.reject(error)
  },
)

export function Get<T = SafeAny>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return requestWithUnwrap<T>(Request, {
    ...config,
    method: 'get',
    url,
  })
}

export function Post<T = SafeAny>(url: string, data?: SafeAny, config?: AxiosRequestConfig): Promise<T> {
  return requestWithUnwrap<T>(Request, {
    ...config,
    method: 'post',
    data,
    url,
  })
}

export function Put<T = SafeAny>(url: string, data?: SafeAny, config?: AxiosRequestConfig): Promise<T> {
  return requestWithUnwrap<T>(Request, {
    ...config,
    method: 'put',
    data,
    url,
  })
}

export function Del<T = SafeAny>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return requestWithUnwrap<T>(Request, {
    ...config,
    method: 'delete',
    url,
  })
}

export function Patch<T = SafeAny>(url: string, data?: SafeAny, config?: AxiosRequestConfig): Promise<T> {
  return requestWithUnwrap<T>(Request, {
    ...config,
    method: 'patch',
    data,
    url,
  })
}
