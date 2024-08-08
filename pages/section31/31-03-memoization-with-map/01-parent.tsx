import { useState } from "react"
import MemoizationWithMapChildPge from "./02-child"
import {v4 as uuidv4} from "uuid"

export default function MemoizationWithMapParentPge():JSX.Element {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.")
  const onClickChange = ():void => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다.")
  }

  return(
    <>
      {/* {data.split(" ").map((el, index) => 
        // 1. memo시 , key 또는 el이 변경된 부분만 리랜더링 됨
        <MemoizationWithMapChildPge key={index} el={el}/>
      )} */}
      {data.split(" ").map((el, index) => 
        // 2. memo를 해도 uuid 처럼 매번 새로운 key 가 발생하면 key 자체가 변경되어 props 로 넘어가므로 리랜더링됨
        <MemoizationWithMapChildPge key={uuidv4()} el={el}/>
      )}
      <button onClick={onClickChange}>체인지</button>
    </>
  )
}