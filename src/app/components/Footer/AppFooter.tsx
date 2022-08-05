import React from 'react';
import { GithubOutlined } from '@ant-design/icons';

export default function AppFooter() {
  return (
    <div className="flex items-center text-gray-500 flex-col">
      <div className="flex items-center justify-center ">React Admin Template</div>
      <a
        className="flex items-center  ml-4"
        href="https://github.com/GZ315200"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        Github
        <GithubOutlined className="ml-2" />
      </a>
    </div>
  )
}