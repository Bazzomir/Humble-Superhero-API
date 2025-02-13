import React from "react"
import logo from '../../assets/logo/logo.png'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top p-0 m-0">
            <div className="container-fluid justify-content-between gap-2">
                <a className="navbar-brand d-lg-none d-flex justify-content-center align-items-center" href="/">
                    <img src={logo} alt="Logo" className="logo d-inline-block align-text-center" />
                    <span>Humble Superhero API</span>
                </a>
                <button className="navbar-toggler mb-1 mb-md-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className="d-flex w-100 justify-content-between">
                        <a className="navbar-brand d-none d-lg-flex justify-content-center align-items-center" href="/">
                            <img src={logo} alt="Logo" className="logo d-inline-block align-text-center" />
                            <span>Humble Superhero API</span>
                        </a>
                        <form className="form d-flex my-auto pb-3 pb-lg-0" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search your Hero" aria-label="Search" />
                            <button className="btn d-flex justify-content-between align-items-center" type="submit"><i className="fa fa-search"></i>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

