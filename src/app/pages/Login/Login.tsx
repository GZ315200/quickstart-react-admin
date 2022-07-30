import styled from 'styled-components/macro';
import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  let navigate = useNavigate();
  const [form] = Form.useForm();

  const [btnLoading, setBtnLoading] = useState(false);

  const handleLogin = (values) => {
      console.log('======', values)
  }

  return (
    <LoginWrapper>
       <FormBar>
          <h2>登录系统</h2>
          <p>使用手机号和令牌密码登录本系统</p>
       </FormBar>
       <Form
        hideRequiredMark
        form={form}
        layout="vertical"
        size="large"
        onFinish={handleLogin}
      >
        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span>账号</span>
              <span className="cursor-pointer primary">需要帮助？</span>
            </div>
          }
          name="username"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder="请输入账号" />
        </Form.Item>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span>密码</span>
              <span className="cursor-pointer primary">忘记密码？</span>
            </div>
          }
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item className="mb-0" name="rememberMe" valuePropName="checked">
          <Checkbox>记住本账号</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            className="w-full"
            htmlType="submit"
            loading={btnLoading}
            size="large"
            type="primary"
          >
            立即登录
          </Button>
          <p className="mt-4 text-gray-500">
            还没有账号？
            <Link
              className="opacity-75 cursor-pointer transition primary hover:opacity-100"
              to="/user/register"
            >
              立即注册
            </Link>
          </p>
        </Form.Item>
      </Form>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  width: 100%;
`;

const FormBar = styled.div`
      padding: 18px 0;

      h2 {
        margin-bottom: 4px;
        color: #495057;
        font-weight: bold;
        font-size: 1.2rem;
      }

      p {
        color: $secondary;
        font-size: 0.8rem;
}
`
