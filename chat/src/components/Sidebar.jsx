import React from 'react'
import UserInfo from './UserInfo'
import RoomList from './RoomList'
import AddRoom from './AddRoom'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <UserInfo/>
        <RoomList/>
        <AddRoom />
    </div>
  )
}

export default Sidebar