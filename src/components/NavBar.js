import React from 'react'
import "../apps/styles.css"

const NavBar = ({ brand }) => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href='/'><img src={brand} alt="logo" width={200} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active text-uppercase" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-uppercase" href="/">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-uppercase" href="/">Contacto</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav lg-icons'>
                        <li><a className='nav-link' href="/"><i className='bx bxs-cart'></i></a></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar

