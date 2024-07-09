import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { visitedPageState } from "../../../commons/stores"

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void ,
  visitedPage: string
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter()
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState)

  const onClickMoveToPage = (path: string) => () => {
    // localStorage.setItem("visitedPage", path) // 로컬스토리지에 저장 할 경우
    setVisitedPage(path) // 로그인 페이지 일떄는 set 하지 않도록 조건 추가
    void router.push(path)
  }
  
  return {onClickMoveToPage, visitedPage}
}

/* 
import { useRouter } from "next/router"
export const useMoveToPage = (path: string) => {
  const router = useRouter()
  return () => router.push(path)
}
 */