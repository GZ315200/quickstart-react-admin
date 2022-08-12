import React from 'react';
import logo from 'assets/images/welcome.png';
import { APP_TITLE } from 'globalConstants';

export default function Welcome() {
  return (
    <div className="flex flex-col">
        <h1 className="text-4xl font-light">欢迎使用{APP_TITLE}</h1>
        <div className="mt-5 flex justify-center">
            <img src={logo} alt="welcome" width={720} className="rounded-full" />
         </div>
    </div>
    
  )
}