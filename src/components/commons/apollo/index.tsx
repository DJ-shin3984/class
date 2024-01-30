import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    // uri: "http://practice.codebootcamp.co.kr/graphql",
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  // @ts-ignore
  return(
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
