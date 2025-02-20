import React from "react"
import logo from '../../assets/logo/logo.png'

// Header component to display the header section of the page with Bootstrap classes for styling
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg p-0 m-0">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center text-center mx-auto" href="/">
                    <img src={logo} alt="Logo" className="logo d-inline-block align-text-center" />
                    <span>Humble <br /> Superhero <br /> API</span>
                </a>
            </div>
        </nav>
    )
}

