import { useState } from "react";

export default function Child1(props: any): JSX.Element {
  function handleClickCountUp(): void {
    props.setCount((prev: number) => prev + 1);
  }

  return (
    <>
      <section>
        <div>자식1의 카운트: {props.count}</div>
        <button onClick={handleClickCountUp}>카운트 올리기!!!</button>
      </section>
      <div></div>
    </>
  );
}
