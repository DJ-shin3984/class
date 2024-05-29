import { gql, useMutation } from '@apollo/client'
import { type ChangeEvent, useState } from 'react'
import { type IMutation, type IMutationLoginUserArgs } from '../../../src/commons/types/generated/type'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '../../../src/commons/stores'
import { useRouter } from 'next/router'

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password){
      accessToken
    }
  }
`

export default function LoginPage (): JSX.Element {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER)
  const [, setAccessToken] = useRecoilState(accessTokenState)

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value)
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value)
  }

  // login mutation 호출하여 accessToken 받아오기
  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email, password
        }
      })
      const accessToken = result.data?.loginUser.accessToken
      console.log(accessToken)

      if (accessToken === undefined) {
        alert('login fail')
        return
      }
      // success response data를 (accessToken) globalState에(recoil) 저장하기
      setAccessToken(accessToken)
      localStorage.setItem('accessToken', accessToken) // 임시 사용 삭제예정

      // login 성공 페이지 이동
      void router.push('/section23/23-03-login-check-success')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <>
        이메일: <input type="text" onChange={onChangeEmail}/>
        비번: <input type="password" onChange={onChangePassword}/>
        <button onClick={onClickLogin}>로그인</button>
    </>
  )
}
