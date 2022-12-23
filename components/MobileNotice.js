import React from 'react'
import styles from '../styles/mobile-notice.module.css'


export function MobileNotice() {
  return (
    <div className={styles.container}>
        <div className={styles.mobileNotice}>
            <h1>
                Sorry, the app is not optimised for mobile yet.
            </h1>
            <button className={styles.ctaNotice}>
                View Anyway
            </button>
        </div>
    </div>
  )
}

