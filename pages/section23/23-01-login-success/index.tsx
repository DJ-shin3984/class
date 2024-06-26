import { gql, useQuery } from '@apollo/client'
import { type IQuery } from '../../../src/commons/types/generated/type'

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
  return (
    <>
      {data?.fetchUserLoggedIn.name} 하이
    </>
  )
}
