import { Avatar, Button, Typography } from 'antd'
import React, {useContext} from 'react'
import { auth } from "../firebase"
import {signOut} from "firebase/auth"
import { AuthContext } from '../context/AuthContext'


const UserInfo = () => {
  // React.useEffect(() => {
  //   db.
  // },[])

  const {User} = useContext(AuthContext)

  return (
    <div className='UserInfo'>
        <div>
            <Avatar src={User.photoURL}>{User.photoURL ? '' : User.displayName?.charAt(0)?.toUperrCase()}</Avatar>
            <Typography.Text>
                {User.displayName}
            </Typography.Text>
        </div>
        <Button onClick={()=> signOut(auth)}>
            Log out
        </Button>
    </div>
  )
}

export default UserInfo