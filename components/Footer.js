import styles from '../styles/footer.module.css'
import Image from 'next/image'

export const Footer = () => {
    return(
        <div className={styles.foot}>
            <div className={styles.logo}>
                <Image src='/toCopy.png' alt="logo" width="120" height="60" />
            </div>
            <div className={styles.projectDesc}>
            This is a tool to copy reviews into social media conversation.
            </div>
            <hr />
            <div className={styles.cp}>
                <p>Copyright © 2022 toCopy</p>
                <a href='https://github.com/HaythemLazaar/toCopy' target='blank'><Image src='/github.svg' width={24} height={24} alt="github icon"/></a>
            </div>

        </div>
    )
}