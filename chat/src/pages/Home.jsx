import React from 'react'
import Video from "../img/video.mp4"
import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <ChatWindow/>
      </div>
      <div class="video-background">
            <div class="overlay"></div>
            <video src={Video} muted loop autoPlay></video>
      </div>
    </div>
  )
}

export default Home