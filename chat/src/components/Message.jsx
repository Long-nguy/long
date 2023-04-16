import { Avatar, Typography } from 'antd'
import React from 'react'


const Message = ({text, displayName, createAt, photoURL}) => {
  return (
    <div className='WrapperStyled'>
      <div>
        <Avatar src={photoURL}></Avatar>
        <Typography.Text className="author">{displayName}</Typography.Text>
        <Typography.Text className="date">{createAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text className="content">{text}</Typography.Text>
      </div>
    </div>
  )
}

export default Message