import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
            <div className="container sticky-bottom" style={{backgroundColor:'#c5d9e2'}}>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>
                    <Link className="navbar-brand" to='/'>
                        <img src="../src/assets/Logo/Padel-Logo.webp" alt="" id='logo' style={{ width: '50px'}} />
                    </Link>
                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>
                </footer>
            </div>
    )
}

export default Footer
