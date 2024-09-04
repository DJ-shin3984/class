import { ChangeEvent, FormEvent } from "react"

export const wrapAsync = <E>(targetFunction: (event: E) => Promise<void>) => (e : E) => {
  void targetFunction(e)
}

export const wrapFormAsync = (targetFunction: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  void targetFunction()
}