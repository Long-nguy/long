import React, { createContext, useState, useContext } from 'react';
import { AuthContext } from './AuthContext'
import useFirestore from '../hooks/useFirestore'

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const [selectedRoomId, setSelectedRoomId] = useState('');
    const { User } = useContext(AuthContext)

    const roomsCondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: User.uid
        };
    }, [User.uid]);

    const rooms = useFirestore('rooms', roomsCondition);
    
    return (
        <ChatContext.Provider value={{
            rooms,
            selectedRoomId, 
            setSelectedRoomId
            }}>
            {children}
        </ChatContext.Provider>
    );
};


