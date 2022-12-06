import type { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/user.css'
import '../styles/font-texts.css'
import '../styles/movies.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
