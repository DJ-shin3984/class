import { gql, useQuery } from "@apollo/client"
import Head from "next/head"
import { GraphQLClient } from "graphql-request"

const FETCH_USEDITEM = gql `
  query fetchUseditem($useditemId: ID!){
    fetchUseditem(useditemId: $useditemId){
      _id
      name
      remarks
      images
    }
  }
`
/* 
export default function OpenGraphProviderPage(): JSX.Element {
  const {data} = useQuery(FETCH_USEDITEM,{
    variables: {useditemId: "66eb7bc5a66ab700285a9f8a"}
  })
  return(
    <>
      <Head>
        <meta property="og:title" content={data?.fetchUseditem.name}/>
        <meta property="og:content" content={data?.fetchUseditem.remarks}/>
        <meta property="og:image" content={data?.fetchUseditem.images?.[0]}/>
      </Head>
      <div>중고마켓에 오신것을 환영합니다.(Body부분)</div>
    </>
  )
}
*/
export default function OpenGraphProviderPage(props: any): JSX.Element {
  console.log("!!!!!! 나의 props",props)
  return(
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name}/>
        <meta property="og:content" content={props?.qqq.remarks}/>
        <meta property="og:image" content={props?.qqq.images?.[0]}/>
      </Head>
      <div>중고마켓에 오신것을 환영합니다.(Body부분)</div>
    </>
  )
}

// 1. getServerSideProps 하는 단어는 이미 Next.js 에서 존재하는 단어이므로 변경 불가능
// 2. 아래의 getServerSideProps 함수는 서버에서만 실행됨 (프론트엔드 서버프로그램 => webpack 서버)
export const getServerSideProps = async (): Promise<any> => {
  console.log("getServerSideProps 함수로 서버입니다.")
  const graphQLClient = new GraphQLClient(
    "http://backend-practice.codebootcamp.co.kr/graphql"
  )

  const result = await graphQLClient.request(FETCH_USEDITEM, {
    useditemId: "66eb7bc5a66ab700285a9f8a"
  })

  return{
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      }
    }
  }
}