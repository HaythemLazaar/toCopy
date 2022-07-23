import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header> 
        <div>
          <Link href="/">
            <img src='/toCopy.png' alt="logo" className='logo'/>
          </Link>
        </div>
        <nav className='navBar'>
          <ul>
            <Link href="/contact">
              <li className='navElement'>Contact</li>
            </Link>
            <Link href="/about">
              <li className='navElement'>About us</li>
            </Link>
            <Link href="/app">
              <li><button className='navBarButton'>Try Here !</button></li>
            </Link>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer>
      </footer>
    </>
  )
}

export default MyApp
