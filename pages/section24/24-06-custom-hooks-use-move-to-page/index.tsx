import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage"

export default function CustomHooksUseAuthPage ():JSX.Element {

  const { onClickMoveToPage, visitedPage } = useMoveToPage()

  return (
    <>
      {/* <button onClick={useMoveToPage("/boards")}>게시판 이동</button> */}
      <button onClick={onClickMoveToPage("/markets")}>마켓 이동</button>
      <button onClick={onClickMoveToPage("/mypages")}>마이페이지 이동</button>
    </>
  )
}

