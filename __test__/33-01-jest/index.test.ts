import { sum } from "../../pages/section33/33-01-jest"

it("정상동작",() => {
  const result = sum(5,3)
  expect(result).toBe(8)
})