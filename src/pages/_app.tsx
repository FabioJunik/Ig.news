import { AppProps } from "../../node_modules/next/app"
import { Header } from "../components/Header/index";
// import {Provider as NextAuthProvider} from '../../node_modules/next-auth/client/_utils';
// import {Provider as NextAuthProvider} from 'next-auth/client';
import { SessionProvider } from "next-auth/react"

import '../styles/global.scss';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp