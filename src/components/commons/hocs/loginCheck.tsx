import { useRouter } from "next/router"
import { useEffect } from "react"
import { getAccessToken } from "../../../commons/libraries/getAceessToken"
import { useRecoilValueLoadable } from "recoil"
import { restoreAccessTokenLoadable } from "../../../commons/stores"

export const loginCheck = (Component: any) => (Props: any) => {
  const router = useRouter()
  const loadable = useRecoilValueLoadable(restoreAccessTokenLoadable)
  // 1. 로그인 체크 (refreshToken 이전)
  // useEffect(() => {
  //   if (localStorage.getItem('accessToken') === null) {
  //     alert('로그인 후 이용하세요.')
  //     void router.push('/section23/23-05-login-check-hoc')
  //   }
  // }, [])
  
  // 2-1. 로그인 체크 (refreshToken 이후) => _app.tsx 와 중복해서 호출하기 떄문에 recoil selecter 를 통한 global 호출
  // useEffect(() => {
  //   void getAccessToken().then(newAccessToken => {
  //     if (newAccessToken === undefined) {
  //       alert('로그인 후 이용하세요.')
  //       void router.push('/section23/23-05-login-check-hoc')
  //     }
  //   })
  // }, [])
  
  // 2-2. global recoil 에서 공유되는 함수 selecter 를 참조하기때문에 _app.tsx 와 중복호출되지 않음
  useEffect(() => {
    void loadable.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert('로그인 후 이용하세요.')
        void router.push('/section23/23-05-login-check-hoc')
      }
    })
  })
  
  return<Component {...Props} />
}