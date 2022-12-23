import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useEffect, useState, useRef } from 'react'

export const NavBar = () => {

  const [menu, setMenu] = useState('closed')
  const menuRef = useRef()

  const toggleMobileMenu = () => {
    if(menu == 'closed') {
      document.getElementById('overlay').style.display = 'block'
      setMenu('open')
    }else {
      document.getElementById('overlay').style.display = 'none'
      setMenu('closed')
    }
  }

  const router = useRouter()

  useEffect(() => {
    const hide = (e) => {
      console.log(e)
      if (e.path[1] !== menuRef.current) toggleMobileMenu()
    }
    document.body.addEventListener("click", hide)

    return () => document.body.removeEventListener("click", hide)
  },)

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
          {router.pathname === '/app' ? 
            "" : 
            <Link href="/app">
              <li><button className='navBarButton'>Try Now !</button></li>
            </Link>
          }
        </ul>
      </nav>
      <div className='menu' ref={menuRef} onClick={toggleMobileMenu}>
        {menu == 'closed' ? 
          <Image src='/icon-menu.svg' className='openMenu' alt="Open Nav Bar" width="40" height="20" /> 
          : 
          <Image src='/icon-menu-close.svg' className='closeMenu' alt="Close Nav Bar" width="40" height="35" />}
      </div>

      {menu === 'closed' ?
        "":
        <nav className='navBar-mobile'>
          <ul>
            <Link href="/contact">
              <li className='navElement-mobile' onClick={toggleMobileMenu}>Contact</li>
            </Link>
            <Link href="/about">
              <li className='navElement-mobile' onClick={toggleMobileMenu}>About us</li>
            </Link>
            {router.pathname === '/app' ? 
              <Link href="/app">
                <li style={{visibility: 'hidden'}}className='navElement-mobile' onClick={toggleMobileMenu}><button className='navBarButton-mobile'>Try Now !</button></li>
              </Link> :
              <Link href="/app">
                <li className='navElement-mobile' onClick={toggleMobileMenu}><button className='navBarButton-mobile'>Try Now !</button></li>
              </Link>
            }
          </ul>
        </nav>
      }
    </header>
  )}