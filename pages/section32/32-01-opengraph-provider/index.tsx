import Head from "next/head"

export default function OpenGraphProviderPage(): JSX.Element {
  
  return(
    <>
      <Head>
        <meta property="og:title" content="Next Study"/>
        <meta property="og:content" content="내 공부를 보세요."/>
        <meta property="og:image" content="http://~~~"/>
      </Head>
      <div>중고마켓에 오신것을 환영합니다..(Body부분)</div>
    </>
  )
}