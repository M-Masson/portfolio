import '../navbar/style/navbar.css'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import imageAbout1 from '../../assets/svg/about/user-regular.svg'
import imageAbout2 from '../../assets/svg/about/user-solid.svg'
import imageSkills1 from '../../assets/svg/skills/sliders-solid.svg'
import imageSkills2 from '../../assets/svg/skills/code-solid.svg'
import imageProjetcts1 from '../../assets/svg/projects/laptop-solid.svg'
import imageProjects2 from '../../assets/svg/projects/laptop-code-solid.svg'
import imageContacts1 from '../../assets/svg/contact/address-card-regular.svg'
import imageContacts2 from '../../assets/svg/contact/address-card-solid.svg'



const nav = [
    {title: "abouts", image1: imageAbout1, image2: imageAbout2},
    {title: "skills", image1: imageSkills1, image2: imageSkills2},
    {title: "projects", image1:imageProjetcts1 ,image2: imageProjects2},
    {title: "contacts", image1: imageContacts1, image2: imageContacts2}
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
                        <div id={`nav-${item.title}`} className={`nav-${isActive ? 'on' : 'off'}`}>
                        <img src={isActive ? item.image2 : item.image1} alt={`image-${item.title}`}/>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
export default Nav