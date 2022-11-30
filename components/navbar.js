import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

export const NavBar = () => {
    const router = useRouter()
    if(router.pathname === '/app'){
      return (
        <header> 
          <div className='logo'>
            <Link href="/">
              <Image src='/toCopy.png' alt="logo" width="100" height="40" />
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
            </ul>
          </nav>
        </header>
        )
    }else{
      return(
        <header> 
          <div className='logo'>
            <Link href="/">
              <Image src='/toCopy.png' alt="logo" width="100" height="40" />
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
  )}}