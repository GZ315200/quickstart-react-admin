import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUserResp, UserReq } from 'app/types/user';
import { login } from 'app/api/user';
import { setToken } from 'utils/auth';
import { useAppDispatch } from 'app/hooks';
import { addLoginUser } from 'app/redux/userLoginSlice';
import { signin } from 'app/redux/appStateSlice';

export default function Login() {

  let navigate = useNavigate();
  let dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const [btnLoading, setBtnLoading] = useState(false);

  const handleLogin = async (
    values: Pick<UserReq, 'managerPhone' | 'accessToken'> & {
      rememberMe: boolean
    }
  ) => {
    try {
      // const { data } = await login(values);
      const tokenExpires = values.rememberMe ? 30 : undefined
      if (1) {
        setToken('1245354'.replace("Bearer ", ""));
      } else {
        // setToken(data.token.replace("Bearer ", ""));
      }
      const data: LoginUserResp = {
        info: {
          userId: 1,
        }
      }
      dispatch(addLoginUser(data));
      dispatch(signin());
      navigate("/");
    } catch {
      setBtnLoading(false)
    }
  }

  return (
    <div className="login-form">
      <div className="form-bar">
        <h2 className="title">登录系统</h2>
        <p className="desc">使用账号和密码登录本系统</p>
      </div>
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
              <span>手机号</span>
            </div>
          }
          name="managerPhone"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder="请输入账号" />
        </Form.Item>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span>令牌密码</span>
            </div>
          }
          name="accessToken"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item className="mb-0" name="rememberMe" valuePropName="checked">
          <Checkbox>记住本账号</Checkbox>
          <Link
            className='opacity-75 cursor-pointer transition primary hover:opacity-100'
            to="/user/forget"
          >
            忘记密码？
          </Link>
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
            账号: any
            密码: any
          </p>
        </Form.Item>
      </Form>
    </div>
  )
}


