import { memo } from "react"

interface IProps {
  el: string
}

function MemoizationWithMapChildPge(props: IProps):JSX.Element {
  console.log("props: ",props)
  console.log("자식이 랜더링 됩니다.", props.el)
  
  return <span>{props.el}</span>
}

export default memo(MemoizationWithMapChildPge)