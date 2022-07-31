import styled from 'styled-components/macro';
import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { GRAY, SECONDARY_GRAY } from 'app/styleConstants';
import { LoginUserResp, UserReq } from 'app/types/user';
import { login } from 'app/api/user';
import { setToken } from 'utils/auth';
import { useAppDispatch  } from 'app/hooks';
import { addLoginUser } from 'app/redux/userLoginSlice';
import { setLoginState } from 'app/redux/appStateSlice';

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
          userId: 1
        }
      }
      dispatch(addLoginUser(data));
      dispatch(setLoginState(true))
      navigate("/");
    } catch {
      setBtnLoading(false)
    }
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
          {/* <p className="mt-4 text-gray-500">
            还没有账号？
            <Link
              className="opacity-75 cursor-pointer transition primary hover:opacity-100"
              to="/user/register"
            >
              立即注册
            </Link>
          </p> */}
        </Form.Item>
      </Form>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  width: 100%;
`;

export const FormBar = styled.div`
      padding: 18px 0;

      h2 {
        margin-bottom: 4px;
        color: ${SECONDARY_GRAY};
        font-weight: bold;
        font-size: 1.2rem;
      }

      p {
        color: ${GRAY};
        font-size: 0.8rem;
}
`
