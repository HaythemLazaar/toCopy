import Head from 'next/head'
import '../styles/globals.css'
import { NavBar } from '../components/navbar'
import { Footer } from '../components/Footer'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>toCopy</title>
        <meta name="description" content="Tool to make fake social media messages and chats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  )
}

export default MyApp
