import React from 'react'

type IUserProfileProps = {
    username: string
}

export default function UserProfile(props: IUserProfileProps) {
  return (
    <div>{props.username}</div>
  )
}