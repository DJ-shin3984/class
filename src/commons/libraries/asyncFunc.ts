import { FormEvent } from "react"

export const wrapAsync = (targetFunction: () => Promise<void>) => () => {
  void targetFunction()
}

export const wrapFormAsync = (targetFunction: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  void targetFunction()
}