import { toast } from "react-toastify"

const isValidName = (value = '') => {
    let valid_char = 0
    value.split('').forEach(char => {
      if ((/[a-z && .]/).test(char.toLowerCase())) {
        valid_char++
      }else(
          toast.warning("Invalid Character")
      )
    })
    return valid_char === value.length
  }
  
const isValidNumber =( value = '') => {
  let valid_char = 0
  value.split('').forEach(char => {
    if ((/[0-9 && -]/).test(char.toLowerCase())) {
      valid_char++
    }else(
        toast.warning("Invalid Number")
    )
  })
  return valid_char === value.length
}

  export {
    isValidName, isValidNumber
  }