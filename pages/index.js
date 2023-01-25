import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <Link href="https://www.producthunt.com/posts/tocopy?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tocopy" target="_blank"><Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=376593&theme=light" alt="toCopy - Convert&#0032;reviews&#0032;into&#0032;conversations&#0046; | Product Hunt" style={{width: 250 + 'px', height: 54 + 'px'}} width="250" height="54" /></Link>
        <div className={styles.heroLander}>
          <h3>#1 Tool to Create Fake Social Media Conversations</h3>
          <h1>Highlight People Talking About your Product/Project</h1>
          <h3>Transform customer reviews into real-looking conversations with our app. With just a few clicks, you can generate fake chats that showcase your products and services in a natural and engaging way.</h3>
        </div>      
        <div className={styles.prodShowcase}>
        </div>
      </main>
      <section className={styles.socialProof}>
        <div className={styles.heroLander}>
          <h1>Online tool that increases your store/business metrics</h1>
          <h3>Make your customer reviews work harder for your business. <br className={styles.lineBreak}/>By converting reviews into engaging and realistic conversations, you can create social proof that will improve your conversion rate, customer retention, and help your business to grow and succeed.</h3>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardImg1}></div>
            <h2>Social Proof</h2>
            <h3>By transforming customer reviews into compelling conversations, you can create social proof that will convince potential customers to buy from your website.</h3>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg2}></div>
            <h2>Client Retention</h2>
            <h3>You can create a more personal and engaging shopping experience for your customers, and show them that you value their feedback and opinions.</h3>
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
      
    </div>
  )
}
