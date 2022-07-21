import React from 'react'
import styles from '../styles/profileImage.module.css'

function ProfileImage(props) {
    if(props.img){
        return (
            <img src={props.img} className={styles.profileimg}/>
          )
    }
}

export default ProfileImage