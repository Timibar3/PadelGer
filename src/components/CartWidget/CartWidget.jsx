import React, { useContext } from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext'

const CarritoNav = () => {

    const { cart } = useContext(Context)

    return (
        <>
        <Link to={'/cart'}><RiShoppingCart2Line style={{fontSize:'35px'}}/></Link>
        <span className='sumador'>{cart.length}</span>       
        </>
    )
}

export default CarritoNav