import { memo, useCallback, useState } from "react"

function MemoizationChildPage(): JSX.Element {
  console.log("자식 랜더링")
  const [countState, setCountState] = useState(0)
  const onClickCountState = useCallback((): void => {
    // console.log(countState + 1)
    setCountState((prev) => prev + 1)
  },[])

  return(
    <>
      <div>카운트(State): {countState}
        <button onClick={onClickCountState}> +1 올리기</button>
      </div>
    </>
  )
}

export default memo(MemoizationChildPage)