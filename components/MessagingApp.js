import React from 'react'
import Whatsapp from './Whatsapp'
import FacebookMessenger from './FacebookMessenger'

function MessagingApp(props) {
  if (props.appName == 'w')
    return (<Whatsapp messages={props.messages} details={props.details} name={props.name} img={props.img}/>);
  return <FacebookMessenger />;
}

export default MessagingApp