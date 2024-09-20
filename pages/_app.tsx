import ApolloSetting from '../src/components/commons/apollo'
import { type AppProps } from 'next/app'
import Layout from '../src/components/commons/layout'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'
import { RecoilRoot, RecoilEnv } from 'recoil'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false
export default function App ({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  )
}
