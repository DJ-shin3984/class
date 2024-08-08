import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../commons/stores";
import { onError } from '@apollo/client/link/error'
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAceessToken";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const loadable = useRecoilValueLoadable(restoreAccessTokenLoadable)

  // 1. 프리렌더링 예제 process
  /* if(process.browser){
    console.log('!@#!@# 브라우저')
    const resultToken = localStorage.getItem('accessToken')
    setAccessToken(resultToken ?? '')
  }else{
    console.log('!@#!@# 프론트 서버!!!')   
  } */
  
  // 2. 프리렌더링 typeof window
  // if(typeof window !== 'undefined'){
  //   console.log('!@#!@# 브라우저')
  //   const resultToken = localStorage.getItem('accessToken')
  //   setAccessToken(resultToken ?? '')
  // }else{
  //   console.log('!@#!@# 프론트 서버!!!')   
  // }

  // 3. 프리렌더링 x useEffect
  useEffect(() => {
    // 기존에 받던 로컬스토리지 방식 (refreshToken 이전)
    // const resultToken = localStorage.getItem('accessToken')
    // void getAccessToken().then(newAccessToken => {
    //   setAccessToken(newAccessToken ?? "")
    // })
    
    // 2. 새로운 방식 ( refreshTOken 이후 )
    loadable.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "")
    })
  }, [])

  const errorLink = onError (({graphQLErrors, operation, forward}) => {
    // 1.error 를 캐치
    if( typeof graphQLErrors !== "undefined"){
      for(const err of graphQLErrors){
        // 1-2 해당 에러가 토큰 만료 에러인지 check(UNAUTHENTICATED)
        if(err.extensions.code === "UNAUTHENTICATED"){
          return fromPromise(
            // 2. refreshToken 으로 accessToken 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "")
              // 3. 재발급 받은 accessToken으로 실패한 쿼리 재 요청하기
              operation.setContext({
                headers: {
                  // 3-1 Authorization: Bearer ${as-is token} 만료된 토큰의 객체값을 스프레드 연산자로 전부가져와서 셋팅
                  ...operation.getContext().headers,
                  // 3-2 토큰만 새걸로 바꿔치기
                  Authorization: `Bearer ${newAccessToken}`
                }
              })
            })
          ).flatMap((params) => forward(operation)) // 3-3 방금 수정한 쿼리 재용청하기
        }
      }
    }
  })

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers : { Authorization: `Bearer ${accessToken}` },
    credentials: "include"
  });

  // const errorLink

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  });

  // prettier-ignore
  // @ts-ignore
  return(
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
