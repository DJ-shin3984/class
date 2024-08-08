import { useCallback, useMemo, useState } from "react"
import MemoizationChildPage from "./02-child"

export default function MemoizationPage(): JSX.Element {
  console.log("부모 컴포넌트 랜더링 완료")
  let countLet = 0
  const [countState, setCountState] = useState(0)

  // 1. useMemo로 변수 기억
  const saveDt = useMemo(() => Math.random(), [])

  // const onClickCountLet = (): void => {
  //   console.log(countLet + 1)
  //   countLet += 1
  // }

  // 2. useCallback으로 함수를 기억  useMemo 처럼 기억하는 함수
  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1)
    countLet += 1
  },[])
  
  // const onClickCountState = (): void => {
  //   console.log(countState + 1)
  //   setCountState(countState + 1)
  // }

  // 3. useCallback 사용시 주의사항 -> State 사용 주의
  const onClickCountState = useCallback((): void => {
    // console.log(countState + 1)
    setCountState((prev) => prev + 1)
  },[])

  // 4. useMemo로 나만의 useCallback 만들어보기
  const onClickCountState2 = useMemo(() => { 
    return (): void => {
      // console.log(countState + 1)
      setCountState((prev) => prev + 1)
    }
  },[])

  return(
    <>
      <div>* * * * * * * * * * * * * * * * * * * * * * * * *</div>
      <div>부모 컴포넌트</div>
        <div>카운트(let): {countLet}
          <button onClick={onClickCountLet}> +1 올리기</button>
        </div>
        <div>카운트(State): {countState}
          <button onClick={onClickCountState}> +1 올리기</button>
        </div>
        {/* 로직과 UI가 합쳐진것이 떄문에 안좋음 피치못할 사정없으면 사용x
        <div>카운트(State): {countState}
          <button onClick={useCallback((): void => {
            console.log(countState + 1)
            setCountState((prev) => prev + 1)
          },[])}> +1 올리기</button>
        </div> 
        */}
      <div>* * * * * * * * * * * * * * * * * * * * * * * * *</div>
      <MemoizationChildPage/>
      {/* <MemoizationChildPage prop1={countState}/> */}
    </>
  )
}