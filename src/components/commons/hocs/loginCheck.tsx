import { useRouter } from "next/router"
import { useEffect } from "react"

export const loginCheck = (Component: any) => (Props: any) => {
  const router = useRouter()
  
  useEffect(() => {
      if (localStorage.getItem('accessToken') === null) {
        alert('로그인 후 이용하세요.')
        void router.push('/section23/23-05-login-check-hoc')
      }
    }, [])
  
  return<Component {...Props} />
}