import '../navbar/style/navbar.css'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const nav = [
    {title: "abouts"},
    {title: "skills"},
    {title: "projects"},
    {title: "contacts"}
]

function Nav() {
    const location = useLocation() 

    return (
        <div id="navbar">
            {nav.map((item, index) => {
                const isActive = location.pathname === `/${item.title}`
                return (
                    <Link
                        key={index}
                        to={`/${item.title}`}
                        id={item.title}
                        className={`nav-${isActive ? 'on' : 'off'}`}
                    >
                        {item.title}
                    </Link>
                )
            })}
        </div>
    )
}
export default Nav