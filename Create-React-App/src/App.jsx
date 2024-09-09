// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import addNotification from 'react-push-notification';
import './App.css'

function App() {
  const clickToNotify =()=>{
    addNotification({
      title:'Npgc Notification',
      message:'visit npgc website',
      duration:5000,
      native:true,
    })
  }

  return (
    <>
      <div>
        <button onClick={clickToNotify} style={{margin:'100px'}}> 
          Click to Notify
        </button>
      </div>
    </>
  )
}

export default App
