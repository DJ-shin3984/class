// function useState <S>(초기값: S): [S, (변경값) => void] {
const useState = <S>(초기값: S): [S, (변경값: S) => void] => {
  let state = 초기값
  const setState = (변경값: S): void => {
    state = 변경값
    console.log(`${state}에서 ${변경값} 으로 값을 변경`)
    console.log(`변경된 ${변경값}을 사용해서 컴포넌트를 리랜더링 한다`) // render()
  }

  return [state, setState]
}

const [count, setCount] = useState(10) // count의 형식은 초기적재 useState(10) 으로 했음으로 number
const [count2, setCount2] = useState("10") // count의 형식은 초기적재 useState(10) 으로 했음으로 stXring
const [count3, setCount3] = useState<boolean>(true) // count의 형식은 generic <> 형식지정을 boolean 으로 했음으로 괄호안에 boolean 타입밖에 못씀