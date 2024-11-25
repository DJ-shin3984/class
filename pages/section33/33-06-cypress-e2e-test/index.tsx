import { useRouter } from "next/router"

export default function CypressE2ETestPage(params): JSX.Element {
  const router = useRouter()
  const onClickButton = () => {
    router.push("/section33/33-06-cypress-e2e-test-moved")
  }
  
  return(
    <>
      <button onClick={onClickButton}>철수랑 놀러가기</button>
    </>
  )
}