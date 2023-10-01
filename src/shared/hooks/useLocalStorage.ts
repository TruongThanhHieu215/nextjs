import { useState } from "react"

export const useLocalStorage = <T>(key: string, initialState: T) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const item = localStorage.getItem(key) ?? ""
      return isValidJSON(item) ? (JSON.parse(item) as T) : initialState
    } catch (error) {
      return initialState
    }
  })

  const setValue = (value: T) => {
    try {
      setLocalStorageValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      // console.log(error);
    }
  }

  const removeValue = () => {
    try {
      setLocalStorageValue(initialState)
      window.localStorage.removeItem(key)
    } catch (error) {
      // console.log(error);
    }
  }

  return [localStorageValue, setValue, removeValue]
}

export const isValidJSON = (obj: string) => {
  try {
    JSON.parse(obj)
    return true
  } catch (e) {
    return false
  }
}
