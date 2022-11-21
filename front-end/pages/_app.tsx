import type { AppProps } from 'next/app'
import "./index.css";
import "./styles/font-texts.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
