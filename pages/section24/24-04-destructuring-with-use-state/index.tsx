import { useState } from 'react'

export default function CounterStatePage () {
  const result = useState(0) // let count = 0;

  function handleClickCountUp () {
    result[1](result[0] + 1) // = setCount(count + 1)
  }
  function onClickCountDown () {
    result[1](result[0] - 1) // = setCount(count - 1)
  }

  return (
    <>
      <section>
        <div>{result[0]}</div>
        <button onClick={handleClickCountUp}>카운트 올리기!!!</button>
        <button onClick={onClickCountDown}>카운트 내리기!!!</button>
      </section>
      <div></div>
    </>
  );
}
