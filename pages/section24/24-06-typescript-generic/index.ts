import { useState } from "react"

// 1.문자/숫자/불린 (primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean) :[boolean, number, string] => {
  return [arg3, arg2, arg1]
}
const result1 = getPrimitive('철수', 123, true)

//
//
// 1.any 타입 => 자바스크립트랑 같음 = 지뢰밭
const getAny = (arg1: any, arg2: any, arg3: any) :[any, any, any] => {
  console.log(arg1 * 1000)
  return [arg3, arg2, arg1]
}
const result2 = getAny('철수', 123, true)

//
//
// 1.unknown 타입 any와는 다름 콘솔쪽 확인
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown) :[unknown, unknown, unknown] => {
  // console.log(arg1 * 1000) err 발생
  if(typeof arg1 === "number") console.log(arg1 * 1000)
  return [arg3, arg2, arg1]
}
const result3 = getUnknown('철수', 123, true)


//
//
// 1.generic 타입 
function getGeneric<Mytype1, Mytype2, Mytype3>(arg1: Mytype1, arg2: Mytype2, arg3: Mytype3) :[Mytype3, Mytype2, Mytype1] {
  return [arg3, arg2, arg1]
}

const getGeneric2 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] =>{
  return [arg3, arg2, arg1]
}

const result4 = getGeneric2('철수', 123, true)
const result5 = getGeneric2<string, number, boolean>('철수', 123, true)

// generic type의 대표적인 사용방식은 useState()
const [count, setCount] = useState<number>(0)