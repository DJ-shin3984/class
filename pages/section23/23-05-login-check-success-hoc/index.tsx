import { gql, useQuery } from '@apollo/client'
import { type IQuery } from '../../../src/commons/types/generated/type'
import { loginCheck } from '../../../src/components/commons/hocs/loginCheck'

const FETCH_USER_LOGED_IN = gql`
  query {
    fetchUserLoggedIn{
      email
      name
    }
  }
`

function MyPage (): JSX.Element {
  const { data } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGED_IN)

  return (
    <>
      {data?.fetchUserLoggedIn.name} 하이
    </>
  )
}

export default loginCheck(MyPage)
