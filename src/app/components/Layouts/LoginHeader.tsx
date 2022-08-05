import React from 'react'

type Props = {
  logo: string;
  title: string;
}

export default function LoginHeader(props: Props) {
  return (
    <div className="flex items-center">
      <img alt="logo" className="w-8 mr-4" src={props.logo} />
      <div className="text-2xl font-bold whitespace-no-wrap brand-box__text">
        {props.title}
      </div>
    </div>
  )
}