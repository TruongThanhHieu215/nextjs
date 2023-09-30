import { ApiService } from "@/service/api.service"
import axios, { AxiosError } from "axios"
import { useState } from "react"

export type ValidationError = {
  message: string
  errors: Record<string, string[]>
}

export type FetchResult<T> = {
  response: T | undefined
  error: AxiosError<ValidationError, Record<string, unknown>> | null
  loading: boolean
  getData: () => Promise<void>
  postData: (data: T) => Promise<void>
  deleteData: (id: string) => Promise<void>
}

export const useFetch = <T>(url: string, option?: Record<string, string>[]): FetchResult<T> => {
  const [response, setResponse] = useState<T | undefined>()
  const [error, setError] = useState<AxiosError<ValidationError, Record<string, unknown>> | null>(null)
  const [loading, setLoading] = useState(false)

  const handleError = (error: unknown) => {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      console.log(error.status)
      console.error(error.response)
      setError(error)
      // Do something with this error...
    } else {
      console.error(error)
    }
  }

  const getData = async (): Promise<void> => {
    setLoading(true)
    try {
      const res = await ApiService.getAll<T>(url, option)
      const json = res.data
      setResponse(json)
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  const postData = async (data: T): Promise<void> => {
    setLoading(true)
    try {
      const res = await ApiService.post(url, data, option)
      const json = await res.data.data
      setResponse(json)
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  const deleteData = async (id: string): Promise<void> => {
    setLoading(true)
    try {
      await ApiService.remove(url, id, option)
      setResponse(undefined)
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return { response, loading, error, getData, postData, deleteData }
}
