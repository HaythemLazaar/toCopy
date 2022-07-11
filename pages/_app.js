import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header> 
        <div>
          <Link href="/">
            <Image src='/toCopy.png' alt="logo" height={100} width={100}/>
          </Link>
        </div>
        <nav>
          <ul>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
            <Link href="/about">
              <li>About us</li>
            </Link>
            <Link href="/app">
              <li>Try Here</li>
            </Link>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
