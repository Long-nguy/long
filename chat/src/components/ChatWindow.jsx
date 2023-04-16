import React, {useContext} from 'react'
import { Avatar, Button, Tooltip, Form, Input } from 'antd'
import Message from './Message'
import styled from 'styled-components'
import AppContextProvider, { AppContext } from '../context/AppContext';
import { AuthContext } from '../context/AuthContext';
import useFirestore from '../hooks/useFirestore';
import { AppContext } from '../context/AppContext';
import { ChatContext } from '../context/ChatContext';

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const ChatWindow = () => {
    const { rooms, setSelectedRoomId } = useContext(AppContext);

    return (
        <div className='ChatWindow'>
            <div className='header-chat'>
                <div className='header-info'>
                    <p className='header-title'>Room 1</p>
                    <span className='header-des'>This is room 1</span>
                </div>
                <div className="info-gr">
                    <Button>
                        Add
                    </Button>
                    <Avatar.Group size="small" maxCount={2}>
                        <Tooltip title="A">
                            <Avatar></Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar></Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar></Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar></Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </div>
            </div>
            <div className="ContentStyled">
                <div className="MessagelistStyled">
                    <Message text="test" photoURL={null} displayName="tung" createAt={123}/>
                    <Message text="test" photoURL={null} displayName="tung" createAt={123}/>
                    <Message text="test" photoURL={null} displayName="tung" createAt={123}/>
                    <Message text="test" photoURL={null} displayName="tung" createAt={123}/>
                </div>
                <Form>
                    <Form.Item>
                        <Input placeholder='Nhat tin nhan...' bordered={false} autoComplete='off'/>
                    </Form.Item>
                    <Button type='primary'>Send</Button>
                </Form>
            </div>
        </div>
    )
}

export default ChatWindow