import React from 'react'
import '../../styles/profileImage.module.css'

function ProfileImage(props) {
    if(props.img){
        return (
            <img src={props.img} className='profile-img'/>
          )
    }
}

export default ProfileImage