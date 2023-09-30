import { AxiosHeaders, AxiosResponse } from "axios"
import http from "./http-common.component"
import useCookies from "shared/custom-hook/cookies/cookies"

const getHeaders = (headersPairs?: Record<string, string>[]): AxiosHeaders => {
  const [token] = useCookies<string>("token")
  const objHeader = new AxiosHeaders()
  if (token) {
    objHeader.set("token", token)
  }
  objHeader.set("locale", "ja")
  objHeader.set("content-type", "application/json")
  if (headersPairs && headersPairs.length > 0) {
    headersPairs.forEach((element) => {
      objHeader.set(element.key, element.value)
    })
  }

  return objHeader
}

const getAll = <T>(path: string, headersPairs?: Record<string, string>[]): Promise<AxiosResponse<T>> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.get<T>(path, options)
}

const get = <T>(path: string, id: string, headersPairs?: Record<string, string>[]): Promise<AxiosResponse<T>> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.get<T>(`${path}${id}`, options)
}

const post = <T>(path: string, data?: T, headersPairs?: Record<string, string>[]): Promise<AxiosResponse> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.post(path, data, options)
}

const put = <T>(
  path: string,
  data: T,
  id?: string,
  headersPairs?: Record<string, string>[]
): Promise<AxiosResponse> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.put(`${path}${id ? id : ""}`, data, options)
}

const remove = (path: string, id: string, headersPairs?: Record<string, string>[]): Promise<AxiosResponse> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.delete(`${path}${id}`, options)
}

const removeAll = (path: string, headersPairs?: Record<string, string>[]): Promise<AxiosResponse> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.delete(path, options)
}

export const ApiService = {
  getAll,
  get,
  post,
  put,
  remove,
  removeAll,
}
