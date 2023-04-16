import { Button, Collapse, Typography, Modal, Input, Form } from 'antd';
import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import useFirestore from '../hooks/useFirestore';
import { AppContext } from '../context/AppContext';
import { ChatContext } from '../context/ChatContext';


const RoomList = () => {
  const { User } = useContext(AuthContext);
  const { setSelectedRoomId } = useContext(ChatContext);

  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: User.uid,
    };
  }, [User.uid]);

  const rooms = useFirestore('rooms', roomsCondition);
  console.log({ rooms });

  const [form] = Form.useForm();

  return (
    <div className='RoomList'>
      {/* <Collapse defaultActiveKey={['1']} className='Collapse'>
        {rooms.map((room) => (
          <Typography.Link key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </Typography.Link>
        ))}
      </Collapse> */}
        {rooms.map((room) => (
          <a key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </a>
        ))}
    </div>
  );
};

export default RoomList;
