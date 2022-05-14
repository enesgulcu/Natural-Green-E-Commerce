import '../styles/globals.css'
import { store } from '../redux/store.js';
import { Provider } from 'react-redux';
import  Header  from '../components/Header';



export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Header/>
      <Component {...pageProps} />
    </Provider>
  )
}
