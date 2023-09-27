import { useState } from "react"

const useToggle = (innitState: boolean = false) => {
  const [value, setValue] = useState<boolean>(innitState)
  const toggle = () => setValue((v: boolean) => !v)
  return [value, toggle]
}

export default useToggle
