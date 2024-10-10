import JestUnitTestSnapshotPage from "../../pages/section33/33-03-jest-unit-test-snapshot"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

it("기존 사진이랑 변경점 있는지 확인-스냅샷 테스트",() => {
  const result = render(<JestUnitTestSnapshotPage/>)
  expect(result.container).toMatchSnapshot()
})