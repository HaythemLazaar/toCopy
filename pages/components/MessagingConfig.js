import React from 'react'
import { useEffect, useState} from 'react'
import styled from 'styled-components'

function MessagingConfig() {
    const [messages, setMessages] = useState([]);
    
  return (
    <div>
        <ChatSettings>
            <h3>Name :</h3>
            <input type='text' placeholder='Dan'/>
            <h3>Image :</h3>
            <ProfileImage />
            <h3>Online Status :</h3>
            <input type='text'  placeholder='Online'/>
            <h3>Add Message Break :</h3>
            <input type='text' placeholder='TODAY'/>
        </ChatSettings>
        <ChatPerson>
            <h2>Person 1 Chat :</h2>
            <h2>Time :</h2>
            <input type='text' />
            <textarea placeholder='Enter person 1 message here' />
            <button>Send Message</button>
        </ChatPerson>
        <ChatPerson>
            <h2>Person 2 Chat :</h2>
            <h3>Name :</h3>
            <input type='text' />
            <h3>Online Status :</h3>
            <input type='text' />
            <h3>Add Message Break :</h3>
            <input type='text' />
            <textarea placeholder='Enter person 2 message here' />
            <button>Send Message</button>
        </ChatPerson>
    </div>
  )
}

export default MessagingConfig

const ChatPerson = styled.div`
    display: flex;
    flex-direction: column;
`

const ChatSettings = styled.div`
    display: flex;
    flex-direction: column;
`

const ProfileImage = styled.div`
    border-radius: 50%
    width: 30px;
    height: 30px; 
`