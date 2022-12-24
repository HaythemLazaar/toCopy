import React from 'react'
import styles from '../styles/about.module.css'
import Image from 'next/image'

function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.toolHeading}>
          <h1 className={styles.toolAbout}>
            toCopy is a marketing tool, creating social proof for the customer.
          </h1>
          <p className={styles.toolDesc}>
            Need social proof to show your customers you can handle them? toCopy is the ultimate tool to create social interactions 
            that increases client trust and retention. <br className={styles.lineBreak}/>
            toCopy provides ready-made assets to to showcase reviews. 
          </p>
        </div>
        <div className={styles.aboutCard}>
            <Image className={styles.convImg} alt="social media conversation" src='/chat.png' width={531} height={292}/> 
        </div>
        <div className={styles.toolCreator}>
          <h1 className={styles.toolAbout}>
            Wanna know how I created this ?
          </h1>
          <p className={styles.toolDesc}>
            I am a Software Engineering student, passion for creating apps for the web.<br/><br/>
            You can find the project repo at 
            <a href='https://github.com/HaythemLazaar/toCopy' target='blank'><Image src='/github.svg' width={24} height={24} alt="github icon"/></a>
          </p>
        </div>
      </div>
    </>
  )
}

export default About