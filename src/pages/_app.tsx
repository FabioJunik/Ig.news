import { AppProps } from "../../node_modules/next/app"


function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
