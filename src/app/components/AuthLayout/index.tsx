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
          <Link to="/login">Login Page</Link>
        </li>
        <li>
          <Link to="/sysAuthUser">SysAuthUser Page</Link>
        </li>
        <li>
          <Link to="/weAppUser">WeAppUser Page</Link>
        </li>
        <li>
          <Link to="/product">Product Page</Link>
        </li>
      </ul>
    </div>
  )
}

export default AuthLayout;