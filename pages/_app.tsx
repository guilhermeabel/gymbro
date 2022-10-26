import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function GymBro({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default GymBro
