import React from 'react'

import LogoNav from './LogoNav'
import CarritoNav from './CarritoNav'
import MenuNav from './MenuNav'

const NavBar = () => {
    return (
        <nav className='navBar'>
        <LogoNav/>
            <MenuNav/>
            <CarritoNav/>
        </nav>
    )
}

export default NavBar
