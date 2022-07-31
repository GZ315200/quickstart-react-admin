import React from 'react'

type IUserProfileProps = {
    username: string
}

export default function UserProfile(props: IUserProfileProps) {
  return (
    <div className='mt-4 text-gray-500 font-light'>{props.username}</div>
  )
}