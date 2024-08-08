import { gql, useMutation } from '@apollo/client'
import { type ChangeEvent, useState } from 'react'
import { type IMutation, type IMutationLoginUserExampleArgs } from '../../../src/commons/types/generated/type'
import { useRecoilState } from 'recoil'
import { accessTokenState } from '../../../src/commons/stores'
import { useRouter } from 'next/router'
import { wrapAsync } from '../../../src/commons/libraries/asyncFunc'

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password){
      accessToken
    }
  }
`

export default function LoginPage (): JSX.Element {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginUserExample] = useMutation<Pick<IMutation, 'loginUserExample'>, IMutationLoginUserExampleArgs>(LOGIN_USER)
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
      const result = await loginUserExample({
        variables: {
          email, password
        }
      })
      const accessToken = result.data?.loginUserExample.accessToken
      console.log(accessToken)

      if (accessToken === undefined) {
        alert('login fail')
        return
      }
      // success response data를 (accessToken) globalState에(recoil) 저장하기
      setAccessToken(accessToken)

      // login 성공 페이지 이동
      void router.push('/section30/30-01-login-refreshtoken-success')
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <>
        이메일: <input type="text" onChange={onChangeEmail}/>
        비번: <input type="password" onChange={onChangePassword}/>
        <button onClick={wrapAsync(onClickLogin)}>로그인</button>
    </>
  )
}
