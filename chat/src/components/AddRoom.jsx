import React, { useContext } from 'react';
import { Form, Modal, Input, Button } from 'antd';
import { AppContext } from '../context/AppContext';
import { AuthContext } from '../context/AuthContext';
import RoomList from './RoomList';
import addDocument from '../services';

export default function AddRoom() {
    //   const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
    const { User } = useContext(AuthContext);
    const [form] = Form.useForm();

    const handleOk = () => {
        addDocument('rooms', { ...form.getFieldsValue(), members: [User.uid] });
        console.log(form.getFieldsValue());
        // reset form value
        form.resetFields();
    };

    return (
        <div>
            <Form form={form} layout='vertical'>
                <Form.Item label='Tên phòng' name='name'>
                    <Input placeholder='Nhập tên phòng' />
                </Form.Item>
                <Form.Item label='Mô tả' name='des'>
                    <Input.TextArea placeholder='Nhập mô tả' />
                </Form.Item>
                <Button onClick={handleOk}>
                    Add Room
                </Button>
            </Form>
        </div>
    );
}
