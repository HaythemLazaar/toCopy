import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>toCopy</title>
        <meta name="description" content="Tool to make fake social media messages and chats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.heroLander}>
          <h3>#1 Tool to Create Fake Social Media Conversations</h3>
          <h1>Get People Talking About you Product/Project</h1>
          <h3>Easiest way to get people chatting about your product, You can export the conversation into .png ...</h3>
        </div>      
        <div className={styles.prodShowcase}>
        </div>
      </main>
      <section className={styles.socialProof}>
        <div className={styles.heroLander}>
          <h1>Online tool that increases your store/business metrics</h1>
          <h3>We all know that it's not easy to retain people to your product and we want that CRO. Well good for us this tool  increases Customer Conversion Rate & CRR. </h3>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardImg}></div>
            <h2>Client Trust</h2>
            <h3>Seeing other people satisfied is the last touch that will convert the client.</h3>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}></div>
            <h2>Client Retention</h2>
            <h3>Since we created trust, now your brand is in the clients plans.</h3>
          </div>
        </div>    
      </section>

      <section className={styles.lastReminder}>
        <div className={styles.reminder}>
          <h1>What are you still waiting for ?</h1>
          <Link href="/app">
            <button className={styles.bigCTA}>Get Started →</button>
          </Link>
        </div>
      </section>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
