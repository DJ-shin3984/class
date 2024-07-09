// 1-1. HOF - 일반함수
function first<T>(arg1: T){
  return function second<U>(arg2: U): [T, U]{
    return [arg1, arg2]
  }
}
first('영희')(8)

// 1-2. HOF 화살표 함수
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
  return [arg1, arg2]
}

first2('영희')(8)

// 1-3. HOF 화살표 함수
const loginCheck = <C>(component: C) => <P>(props: P): [C, P] => {
  return [component, props]
}

loginCheck('영희')(8)