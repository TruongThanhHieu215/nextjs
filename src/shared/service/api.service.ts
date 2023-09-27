import { AxiosHeaders } from "axios"
import http from "./http-common.component"
import useCookies from "shared/custom-hook/cookies/cookies"

export function getHeaders(headersPairs?: any): AxiosHeaders {
  const [token] = useCookies<string>("token")
  const objHeader = new AxiosHeaders()
  if (token) {
    objHeader.set("token", token)
  }
  objHeader.set("locale", "ja")
  objHeader.set("content-type", "application/json")
  if (typeof headersPairs === "object") {
    if (Array.isArray(headersPairs)) {
      headersPairs.forEach((element: any) => {
        objHeader.set(element.key, element.value)
      })
    }
  }

  return objHeader
}

export const getAll = (path: string, headersPairs?: any): Promise<any> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.get<Array<any>>(path, options)
}

const get = (path: string, id: string, headersPairs?: any): Promise<any> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.get<any>(`${path}${id}`, options)
}

const post = (path: string, data?: any, headersPairs?: any): Promise<any> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.post<any>(path, data, options)
}

const put = (path: string, data: any, id?: string, headersPairs?: any): Promise<any> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.put<any>(`${path}${id ? id : ""}`, data, options)
}

const remove = (path: string, id: string, headersPairs?: any): Promise<any> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.delete<any>(`${path}${id}`, options)
}

const removeAll = (path: string, headersPairs?: any): Promise<any> => {
  const options = {
    headers: getHeaders(headersPairs),
  }
  return http.delete<any>(path, options)
}

// const findByTitle = (title: string) : Promise<any>=> {
//   return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
// };

const CallApi = {
  getAll,
  get,
  post,
  put,
  remove,
  removeAll,
}

export default CallApi
