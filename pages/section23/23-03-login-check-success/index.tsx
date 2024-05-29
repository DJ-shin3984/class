import { gql, useQuery } from '@apollo/client'
import { type IQuery } from '../../../src/commons/types/generated/type'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const FETCH_USER_LOGED_IN = gql`
  query {
    fetchUserLoggedIn{
      email
      name
    }
  }
`

export default function LoginPage (): JSX.Element {
  const { data } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGED_IN)
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      alert('로그인 후 이용하세요.')
      void router.push('/section23/23-03-login-check')
    }
  }, [])

  return (
    <>
      {data?.fetchUserLoggedIn.name} 하이
    </>
  )
}
