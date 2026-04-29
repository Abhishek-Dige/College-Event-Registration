import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AuthForm from "./AuthForm";
import { useAuth } from "../context/AuthContext";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                    <div className="container-fluid">
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img src="/images/logo/Logo_IIITL.png" alt="Logo" width="40" height="34"
                                className="d-inline-block align-middle me-2" />
                            <span className="fw-bold">Event Dashboard</span>
                        </Link>
                        
                        <button className="navbar-toggler" type="button" onClick={() => setIsNavOpen(!isNavOpen)}
                            aria-controls="navbarSupportedContent" aria-expanded={isNavOpen} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink end to="/" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        onClick={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }}
                                        aria-expanded={isDropdownOpen}
                                    >
                                        Events
                                    </a>

                                    <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                                        <li><NavLink className="dropdown-item" to="/dance">Dance</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/music">Music</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/drama">Drama</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/fine-arts">Fine Arts</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/debate">Debate</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/coding">Coding</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink end to="/contact-us" className="nav-link">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                            
                            <form className="d-flex me-3" role="search" onSubmit={(e) => e.preventDefault()}>
                                <input className="form-control me-2" type="search" placeholder="Search events..." aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>

                            <div className="d-flex align-items-center mt-2 mt-lg-0">
                                {currentUser ? (
                                    <div className="dropdown">
                                        <button className="btn btn-light dropdown-toggle d-flex align-items-center gap-2" type="button" id="userMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                                                {currentUser.name.charAt(0).toUpperCase()}
                                            </div>
                                            {currentUser.name}
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userMenu">
                                            <li><span className="dropdown-item-text text-muted small">{currentUser.email}</span></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <button className="btn btn-primary px-4 fw-semibold" onClick={() => setIsAuthOpen(true)}>
                                        Login / Register
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <AuthForm isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </div>
    )
}

export default Header;