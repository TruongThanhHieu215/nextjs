import CallApi from "@/service/api.service"
import { useState, useEffect } from "react"

interface FetchResult<T> {
  response: T | undefined
  error: string
  loading: boolean
  getData: () => Promise<void>
  postData: (data: any) => Promise<void>
  deleteData: () => Promise<void>
}

const useFetch = <T>(url: string, option?: any): FetchResult<T> => {
  const [response, setResponse] = useState<T | undefined>()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const getData = async (): Promise<void> => {
    setLoading(true)
    try {
      const res = await CallApi.getAll(url, option)
      const json = await res.data
      setResponse(json)
    } catch (error: any) {
      setError(error ? error : "")
    } finally {
      setLoading(false)
    }
  }

  const postData = async (data: any): Promise<void> => {
    setLoading(true)
    try {
      const res = await CallApi.post(url, data, option)
      const json = await res.data.data
      setResponse(json)
    } catch (error: any) {
      setError(error ? error.response.data : "")
    } finally {
      setLoading(false)
    }
  }

  const deleteData = async (): Promise<void> => {
    setLoading(true)
    try {
      await CallApi.remove(url, option)
      setResponse(undefined)
    } catch (error: any) {
      setError(error ? error : "")
    } finally {
      setLoading(false)
    }
  }

  return { response, loading, error, getData, postData, deleteData }
}

export default useFetch
