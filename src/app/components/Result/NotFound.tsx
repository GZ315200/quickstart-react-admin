import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as NotFoundImg } from 'assets/images/error_404.svg';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <NotFoundImg style={{ width: '520px' }} />

      <h2 className="text-3xl font-medium">Ops!</h2>
      <p className="my-4 text-center w-96 text-lg">
        你要前往的页面未找到
      </p>

      <Link replace to="/">
        <Button size="large" type="primary">
          回到首页
        </Button>
      </Link>
    </div>
  )
}
