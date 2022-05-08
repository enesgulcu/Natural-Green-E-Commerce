import '../styles/globals.css'
import { store } from '../redux/store.js';
import { Provider } from 'react-redux';



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
