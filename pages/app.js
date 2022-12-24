import React, { useState, useEffect, createRef} from 'react';
import { useScreenshot, createFileName } from 'use-react-screenshot';
import MessagingApp from '../components/MessagingApp';
import ProfileImage from '../components/ProfileImage';
import styles from '../styles/App.module.css';
import styled from 'styled-components';
import { MobileNotice } from '../components/MobileNotice';


function App() {
  let message1 = {
    content: '',
    time: '',
    sendingUser: 1
  }

  let message2 = {
    content: '',
    time: '',
    sendingUser: 2,
    status: 'unseen'
  }

  let messageBreak = {
    content: 'TODAY',
    sendingUser: 3
  }

  let time = new Date()

  const [messages, setMessages] = useState([
    {
      content: 'TODAY',
      sendingUser: 3
    },
    {
      content: 'Hello',
      time: '11:30 AM',
      sendingUser: 1
    },
    {
      content: 'Hello',
      time: '11:31 AM',
      sendingUser: 2,
      status: 'seen'
    }
  ]);

  const [details, setDetails] = useState({
    name: 'Dan',
    status: 'Online'
  })

  const [selectedImage, setSelectedImage] = useState('/whatsapp-images/blank.png')

  const [lastMessageStatus, setLastMessageStatus] = useState('unseen')

  const changeName = (e) => {
    const newDetails = {...details}
    newDetails.name = e.target.value
    setDetails(newDetails)
  }
  
  const changeStatus = (e) => {
    const newDetails = {...details}
    newDetails.status = e.target.value
    setDetails(newDetails)
  }

  const addMessage = (e,message) => {
    e.preventDefault();
    console.log(message.content)
    console.log(message.time)
    if(message.content != "" && message.time != ""){
      const newMessages = [...messages]
      message.status = lastMessageStatus
      newMessages.push(message)
      setMessages(newMessages)
      if (e.target.value != ''){
        e.target.reset()
      }
    }
  }

  const [view, setView] = useState(false)

  const changeView = () => {
    setView(!view)
    document.querySelector('.App_App__ASmOF').style.display = 'flex'
  }
 
  useEffect( () => {
    console.log('Updated Messages !')
  },[messages])

  const ref = createRef()
  const [screenshot, takeScreenshot] = useScreenshot()

  const download = (image, { name = "chat", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const getImage = () => takeScreenshot(ref.current).then(download)

  const resetMessages = () => {
    const newMessages = []
    setMessages(newMessages)
  }
  //style={{display: view ? 'none' : 'flex'}}

  return (
    <>
      <div className={styles.App}>
        <div className={styles.messagingConfig}> 
          <div className={styles.preview}>
            <div className={styles.container}>
              <div className={styles.profileDetails}>
                <h2>General Settings :</h2>
                <label>Name :</label>
                <input type='text' value={details.name} onChange={changeName} />
                <label>Image :</label>
                <div className={styles.imgContainer}>
                  <div className="profileImage">
                    <ProfileImage img={selectedImage} />
                  </div>
                  <input type="file" name="profileImage" onChange={(event) => {
                    if(event.target.files.length !== 0) {
                      setSelectedImage(URL.createObjectURL(event.target.files[0]));
                  }}}/>
                </div>
                <label>Online Status :</label>
                <input type='text' value={details.status} onChange={changeStatus} />
              </div>
            </div>
          </div >
          
          <div className={styles.chat}>
            <div className={styles.chatPerson}>
              <form onSubmit={e => addMessage(e,message1)}>
                <h2>Person 1 Chat :</h2>
                <label>Time :</label>
                <input type='text' placeholder={time.getHours() + ':' + time.getMinutes()} onChange={e => message1.time = e.target.value} />
                <label>Message :</label>
                <textarea placeholder='Enter person 1 message here' onChange={e => message1.content = e.target.value} />
                <input type='submit' value='Send Message'/>
              </form>
            </div>
            <div className={styles.chatPerson}>
              <form onSubmit={e => addMessage(e,message2)}>
                <h2>Person 2 Chat :</h2>
                <label>Message Status :</label>
                <div>
                  <input type="radio" id="unseen" name="status" value="unseen" onChange={e => setLastMessageStatus(e.target.value)} checked={lastMessageStatus == 'unseen'} /> <label style={{fontWeight: 300}}>Delivered</label>
                  <input type="radio" id="seen" name="status" value="seen" onChange={e => setLastMessageStatus(e.target.value)} checked={lastMessageStatus == 'seen'} /> <label style={{fontWeight: 300}}>Seen</label>
                </div>
                <label>Time :</label>
                <input type='text' placeholder={time.getHours() + ':'+time.getMinutes()} onChange={e => message2.time = e.target.value} />
                <label>Message :</label>
                <textarea placeholder='Enter person 2 message here' onChange={e => message2.content = e.target.value} />
                <input type='submit' value='Send Message' />
              </form>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.preview}>
            <div className={styles.container}>
              <div className={styles.msgbrk}>
                <h2>Add Message Break :</h2>
                <label>Content :</label>
                <input type='text' placeholder='TODAY' onChange={e => messageBreak.content = e.target.value}/>
                <button onClick={e => addMessage(e,messageBreak)}>Add Message Break</button>
              </div>
            </div>
          </div>
          <div className={styles.prview}>
            <div ref={ref}>
              <MessagingApp messages={messages} details={details} appName={'w'} img={selectedImage}/>
            </div>
            <button className={styles.resetBtn} onClick={resetMessages}>Reset</button>
            <button className={styles.screenshotBtn} onClick={getImage}>Screenshot</button>
          </div>
        </div>
      </div>
      {view ? '' : <MobileNotice view={changeView}></MobileNotice>}
    </>
    
  );
}

export default App;

const ChatSettings = styled.div`
  display: flex;
  flex-direction: column;
`

const MessagingConfig = styled.div`
  max-width: 800px;
`
