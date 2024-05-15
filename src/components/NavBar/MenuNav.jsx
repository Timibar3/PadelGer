import React from 'react'

const MenuNav = () => {
    
    return (
        <>
            <ul className='ul-category'>
                <li className='li-paletas'>PALETAS
                    <ul className='ul-paletas'>
                        <li><a href="">CONTROL</a></li>
                        <li><a href="">PEGADA</a></li>
                        <li><a href="">HÍBRIDAS</a></li>
                    </ul>
                </li>
                <li className='li-pelotas'>PELOTAS
                    <ul className='ul-pelotas'>
                        <li><a href="">NACIONALES</a></li>
                        <li><a href="">IMPORTADAS</a></li>
                    </ul>
                </li>
                <li><a href="">ACCESORIOS</a></li>
                <li className='li-outlet'>OUTLET
                    <ul className='ul-outlet'>
                        <li><a href="">PALETAS</a></li>
                        <li><a href="">PELOTAS</a></li>
                        <li><a href="">ACCESORIOS</a></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default MenuNav
