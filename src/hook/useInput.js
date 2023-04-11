import { useState } from "react"

const useInput = (inputValue) => {
  const [valueInput, setValue] = useState("")
  const [inputTouched, setInputTouched] = useState(false)

  const valueValid = inputValue(valueInput)
  const inputInvalid = !valueValid && inputTouched

  const valueInputHandler = (event) => {
    setValue(event.target.value)
  }
  const inputBlurHandler = () => {
    setInputTouched(true)
  }

  const reset = () => {
    setValue("")
    setInputTouched(false)
  }

  return {
    valueInput,
    valueValid,
    inputInvalid,
    valueInputHandler,
    inputBlurHandler,
    reset,
  }
}

export default useInput
