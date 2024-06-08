import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBoot = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container">
                    <Link className="navbar-brand" to='/'>
                        <img src="../src/assets/Logo/Padel-Logo.webp" alt="" id='logo' style={{ width: '50px', marginRight: '150px' }} />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Paletas
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/categorias/Paleta">Todas</Link></li>
                                    <li><Link className="dropdown-item" to="/Paleta/Control">Control</Link></li>
                                    <li><Link className="dropdown-item" to="/Paleta/Pegada">Pegada</Link></li>
                                    <li><Link className="dropdown-item" to="/Paleta/Hibrida">Híbridas</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pelotas
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/categorias/Pelotas">Todas</Link></li>
                                    <li><Link className="dropdown-item" to="/Pelotas/Nacional">Nacionales</Link></li>
                                    <li><Link className="dropdown-item" to="/Pelotas/Importada">Importadas</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categorias/Accesorios">Accesorios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/descuento/outlet">Outlet</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <CartWidget></CartWidget>
                </div>
            </nav>
        </>
    )
}

export default NavBoot
