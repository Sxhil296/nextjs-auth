import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import { useSession, SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SessionProvider session={pageProps.session}>
    <Navbar />
    <Component {...pageProps} />
    </SessionProvider>
    </>
  )

}

export default MyApp
