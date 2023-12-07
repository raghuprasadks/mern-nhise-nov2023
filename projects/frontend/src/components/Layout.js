import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/"> Home</Link>
            </li>
            <li>
                <Link to="/signup"> Sign Up</Link>
            </li>
            <li>
                <Link to="/login"> Login</Link>
            </li>
            <li>
                <Link to="/member"> Login</Link>
            </li>
            <li>
                <Link to="/logout"> Logout</Link>
            </li>


        </ul>
    </nav>
    <Outlet></Outlet>
    </>
    
  )
}

export default Layout