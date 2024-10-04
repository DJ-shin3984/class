import { render, screen } from "@testing-library/react"
import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test"
import "@testing-library/jest-dom"

it("componant test",() => {
  render(<JestUnitTestPage/>)
  const myText = screen.getByText("철수는 13")
  expect(myText).toBeInTheDocument()

  const myText2 = screen.getByText("철수의 취미 입력")
  expect(myText2).toBeInTheDocument()

  const myText3 = screen.getByText("철수랑 놀기")
  expect(myText3).toBeInTheDocument()
})