import { gql, useApolloClient} from '@apollo/client'
import { wrapAsync } from '../../../src/commons/libraries/asyncFunc'

const FETCH_USER_LOGED_IN = gql`
  query {
    fetchUserLoggedIn{
      email
      name
    }
  }
`

export default function LoginPage (): JSX.Element {
  // 1. page 접속시 자동으로 data 저장되고 (data는 글로벌 스테이트에 저장), 리랜더링 됨
  // const { data } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGED_IN)

  // 2. 버튼 클릭시 data에 저장되고 (data는 글로벌 스테이트에 저장), 리랜더링 됨
  // const [mySunction, { data }] = useLazyQuery(FETCH_USER_LOGED_IN)

  // 3. axios 처럼 사용하는 방법 (data는 글로벌스테이트에 저장)
  // const client = useApolloClient()
  // client.query() == axios.get() 과 동일하다

  const client = useApolloClient()
  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query:FETCH_USER_LOGED_IN
    })
    console.log("result: ",result)
  }

  return (
    // <>
    //   {data?.fetchUserLoggedIn.name} 하이
    // </>
    <button onClick={wrapAsync(onClickButton)}>클릭하세요</button>
  )
}
