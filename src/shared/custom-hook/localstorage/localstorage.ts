import React, { useState } from "react"

const useLocalstorage = (key: string, innitalState: any) => {
  const [localstoregeValue, setLocalstorageValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : innitalState
    } catch (error) {
      return innitalState
    }
  })

  const setValue = (value: any) => {
    try {
      const valueStore = value instanceof Function ? value(localstoregeValue) : value
      setLocalstorageValue(valueStore)
      window.localStorage.setItem(key, JSON.stringify(valueStore))
    } catch (error) {
      // console.log(error);
    }
  }

  const removeValue = () => {
    try {
      setLocalstorageValue(innitalState)
      window.localStorage.removeItem(key)
    } catch (error) {
      // console.log(error);
    }
  }

  return [localstoregeValue, setValue, removeValue]
}

export default useLocalstorage
