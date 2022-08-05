import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/macro';
import { Button, Form, Input } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { VERIFY_TIME } from 'globalConstants';
import { isNumber } from 'utils';
import { ResetPsd } from 'app/types/user';


export default function ForgetPassd() {
    //定义一个循环定时器ref，很方便地保存任何可变值
    const intervalRef = useRef(0);
    const [time, settime] = useState<number>(0);
    const [disable, setdisable] = useState<boolean>(false);

    const [form] = Form.useForm();

    const handleLogin = async (
        values: Pick<ResetPsd, 'managerPhone' | 'verifyCode'>
    ) => {

    }

    const handleVerifycode = () => {
        settime(VERIFY_TIME);
        setdisable(true);
    }


    useEffect(() => {
        if (time === VERIFY_TIME) {
            const timer = setInterval(() => settime(time => --time), 1000);
            if (isNumber(timer)) {
                intervalRef.current = timer;
            }
        } else if (time === 0) {
            clearInterval(intervalRef.current);
            setdisable(false);
        }
    }, [time, disable]);


    return (
        <Wrapper>
            <Link className='opacity-75 cursor-pointer transition primary hover:opacity-100 flex'
                to="/user/login">
                <LeftOutlined className='mr-1 mt-1' />
                返回登录
            </Link>
            <div className="form-bar">
                <h2 className="title">重置令牌密码</h2>
                <p className="desc">使用手机号和验证码重置令牌密码, 重置的密码将发送至该手机号</p>
            </div>
            <Form
                hideRequiredMark
                form={form}
                size="middle"
                layout='vertical'
                onFinish={handleLogin}
            >
                <Form.Item
                    label={
                        <div className="flex items-center justify-between w-full">
                            <span>手机号</span>
                        </div>
                    }
                    name="managerPhone"
                    rules={[{ required: true, message: '请输入手机号' }]}
                >
                    <Input placeholder="请输入手机号" />
                </Form.Item>
                <Form.Item
                    label={
                        <div className="flex items-center justify-between w-full">
                            <span>验证码</span>
                        </div>
                    }
                    name="verifyCode"
                    rules={[{ required: true, message: '请输入验证码' }]}
                >
                    <Input placeholder="请输入验证码" />
                </Form.Item>
                <Form.Item>
                    <Button disabled={disable} size="middle" type='link' onClick={handleVerifycode}>
                        {time ? `${time}秒后获取` : '获取验证码'}
                    </Button>
                    <Button
                        className="w-3/5"
                        htmlType="submit"
                        size="middle"
                        type="primary"
                    >
                        确认重置
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 30%;
  margin: 20px;
`;

