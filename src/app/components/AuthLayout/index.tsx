import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const AuthLayout = (props: Props) => {
  return (
    <div>
        <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
    </div>
  )
}

export default AuthLayout;