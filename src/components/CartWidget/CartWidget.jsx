import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const CarritoNav = () => {
    return (
        <>
        <Link to={'/cart'}><RiShoppingCart2Line/></Link>       
        </>
    )
}

export default CarritoNav