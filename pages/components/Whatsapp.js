import React from 'react'
import styled from 'styled-components'
import styles from '../../styles/whatsapp.module.css'
import ProfileImage from './ProfileImage'
import topLeftImage from '../../whatsapp-images/whatsapp_iphone_top_left.png'
import topRightImage from '../../whatsapp-images/whatsapp_iphone_top_right.png'
import bottomFooter from '../../whatsapp-images/whatsapp_iphone_footer.png'
import seen from '../../whatsapp-images/whatsapp_chat_msg_seen.png'
import unseen from '../../whatsapp-images/whatsapp_chat_msg_unseen.png'


function Whatsapp(props) {
  return (
    <div className={styles.whatsapp}>
        <StatusBar>
            <div className={styles.topLeft}>
                <img src={topLeftImage} className={styles.statusImg}/>
                <div className={styles.profileImage}>
                    <ProfileImage img={props.img}/> 
                </div>
                <Profile>
                    <h5>{props.details.name}</h5>
                    <h6>{props.details.status}</h6>
                </Profile>
            </div>
            <img src={topRightImage} className={styles.statusImg}/>
        </StatusBar>
        <div className={styles.messageDisplay}>
            <ul>
                {props.messages.map((message, i) => {
                    if(message.sendingUser == 3){
                        return(
                            <li key={i} className={styles.user3}>
                                <div>{message.content}</div>
                            </li>
                        )
                    }
                    else if(message.sendingUser == 1){
                        return(
                            <li key={i} className={styles.user1}>
                                <div className={styles.messageContent}>{message.content}</div>
                                <div className={styles.messageTime}>{message.time}</div>
                            </li>
                        )
                    }
                    else if(message.sendingUser == 2){
                        if(message.status == 'seen'){
                            return(
                                <li key={i} className={styles.user2}>
                                    <div className={styles.messageContent}>{message.content}</div>
                                    <div className={styles.messageTime}>{message.time}</div>
                                    <div className={styles.messageStatus}><img src={seen} /></div>
                                </li>
                            )
                        }
                        else{
                            return(
                                <li key={i} className={styles.user2}>
                                    <div className={styles.messageContent}>{message.content}</div>
                                    <div className={styles.messageTime}>{message.time}</div>
                                    <div className={styles.messageStatus}><img src={unseen} /></div>
                                </li>
                            )
                        }
                        
                    }  
                    
                })}
            </ul>
        </div>
        <MessageBar>
            <img src={bottomFooter} />
        </MessageBar>
    </div>
  )
}

export default Whatsapp

const StatusBar = styled.div`
    background-color: #f7f7f7;
    width: 425px;
    height: 50px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1.5px solid #c4c4c4c7;
    .status-img{
        height: 50px;
    }
`

const MessageBar = styled.div`
    width: 425px;
    border-top: grey;
    img{
        max-width: 425px;
    }
`

const Profile = styled.div`
    margin-left: 5px;
    h5{
        font-size: 15px;
        margin: 0;
        color: #333333;
    }
    h6{
        font-size: 9px;
        margin: 0;
        color: #bfc5cb;
    }
`