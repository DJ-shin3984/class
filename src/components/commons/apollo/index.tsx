import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  
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
    const resultToken = localStorage.getItem('accessToken')
    setAccessToken(resultToken ?? '')
  }, [])


  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers : { Authorization: `Bearer ${accessToken}` }
  });

  // const errorLink

  const client = new ApolloClient({
    // uri: "http://practice.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  // @ts-ignore
  return(
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
