import { useRouter } from "next/router"
import { useEffect } from "react"
import type { ComponentType, ReactElement } from "react"

// 1. eslint 버전에 따라서 <P extends {} 가 오류라고 표기될수도 있다 해당 안내 메시지에 따라 Record<string, unknown> 사용
// export const loginCheck = (Component: ComponentType ) => <P extends {} >(Props: P): ReactElement => {
// 2. eslint 버전에 따라서 (Component: ComponentType ) 를 (Component: () => JSX.Element) 로 변경해야 return 쪽에서 에러가 표기 안될수 있다.
// export const loginCheck = (Component: ComponentType ) => <P extends Record<string, unknown>>(Props: P): ReactElement => {
export const loginCheck = (Component: () => JSX.Element) => 
  <P extends Record<string, unknown>>(Props: P): ReactElement => {
    const router = useRouter()
    
    useEffect(() => {
        if (localStorage.getItem('accessToken') === null) {
          alert('로그인 후 이용하세요.')
          void router.push('/section23/23-05-login-check-hoc')
        }
      }, [])
    
    return<Component {...Props} />
}