import React from 'react'
import styles from '../styles/contact.module.css'
import ContactForm from '../utils/contactForm'

function Contact() {
  return (
    <>
      <div className={styles.contactHero}>
        <h1>
          You can leave me a message here :
        </h1>
        <ContactForm />
      </div>
    </>
  )
}

export default Contact