import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>IP-ADRESS-TRACKER</title>
        </Head>
        <Component {...pageProps} />
      </>
    </Provider>
  )
}

export default MyApp
