import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0); // let count = 0;

  function handleClickCountUp() {
    /*  
   // state 의경우 임시 저장소에 저장 후 변경되기 때문에 위와 같이 함수안에서 setCount를 여러번 사용하형 count를 더하더라도 가장 마지막의 setCount만 동작한다.
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    */

    // state 의경우 임시 저장소에 저장 후 변경되기 때문에 위와 같이 함수안에서 setCount를 여러번 사용하형 count를 더하더라도 가장 마지막의 setCount만 동작한다.
    setCount((target) => target + 1);
    setCount((target) => target + 1);
    setCount((target) => target + 1);
    setCount((target) => target + 1);
    setCount((target) => target + 1);
  }
  // function onClickCountDown() {
  //   setCount(count - 1);
  // }

  return (
    <>
      <section>
        <div>{count}</div>
        <button onClick={handleClickCountUp}>카운트 올리기!!!</button>
        {/* <button onClick={onClickCountDown}>카운트 내리기!!!</button> */}
      </section>
      <div></div>
    </>
  );
}
