import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import toast from "react-hot-toast";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { user, login, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regConfirmPassword, setRegConfirmPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await api.login({ email: loginEmail, password: loginPassword });
            login(data);
            document.querySelector('#loginModal .btn-close')?.click();
            toast.success("Successfully logged in!");
            navigate('/');
        } catch (error) {
            toast.error(error.message || "Failed to login. Please register first.");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (regPassword !== regConfirmPassword) {
            return toast.error("Passwords don't match!");
        }
        try {
            await api.register({ name: regName, email: regEmail, password: regPassword });
            toast.success("Registered successfully! You can now login.");
            document.querySelector('#registerModal .btn-close')?.click();
            setRegName('');
            setRegEmail('');
            setRegPassword('');
            setRegConfirmPassword('');
        } catch (error) {
            toast.error(error.message || "Registration failed.");
        }
    };

    const isDark = theme === "dark";

    return (
        <header>
            <nav className={`navbar navbar-expand-lg sticky-top shadow-sm ${isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src="/images/logo/Logo_IIITL.png" alt="Logo" width="40" height="34" className="me-2" />
                        <span className="fw-bold">Event Dashboard</span>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" onClick={() => setIsNavOpen(!isNavOpen)}
                        aria-controls="navbarSupportedContent" aria-expanded={isNavOpen} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink end to="/" className="nav-link px-3">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink end to="/contact-us" className="nav-link px-3">Contact Us</NavLink>
                            </li>
                        </ul>
                        
                        <div className="d-flex align-items-center gap-3">
                            {/* Theme Toggle Button */}
                            <button 
                                onClick={toggleTheme} 
                                className="btn border-0 p-2 d-flex align-items-center justify-content-center theme-toggle-btn"
                                style={{ 
                                    background: "transparent",
                                    transition: "transform 0.2s ease",
                                    cursor: "pointer",
                                    outline: "none"
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                {isDark ? (
                                    // Sun Icon for Dark Mode (to switch to Light)
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="white" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        style={{ transition: "stroke 0.3s ease" }}
                                    >
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                ) : (
                                    // Moon Icon for Light Mode (to switch to Dark)
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="black" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        style={{ transition: "stroke 0.3s ease" }}
                                    >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                )}
                            </button>

                            {user ? (
                                <div className="dropdown">
                                    <button 
                                        className="btn btn-secondary dropdown-toggle d-flex align-items-center gap-2 rounded-pill px-3" 
                                        type="button" 
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        aria-expanded={isProfileOpen}
                                    >
                                        <i className="bi bi-person-circle fs-5"></i>
                                        <span className="d-none d-md-inline">Profile</span>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-menu-end shadow ${isProfileOpen ? 'show' : ''}`} style={{ position: 'absolute', right: 0 }}>
                                        <li className="px-3 py-2 text-muted small border-bottom">
                                            Signed in as<br/>
                                            <strong className={isDark ? "text-light" : "text-dark"}>{user.email}</strong>
                                        </li>
                                        <li>
                                            <button className="dropdown-item text-danger d-flex align-items-center gap-2 py-2 mt-1" onClick={() => {
                                                logout();
                                                setIsProfileOpen(false);
                                                toast.success("Logged out successfully");
                                            }}>
                                                <i className="bi bi-box-arrow-right"></i> Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="d-flex gap-2">
                                    <button className={`btn px-4 rounded-pill ${isDark ? 'btn-outline-light' : 'btn-outline-dark'}`} data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                                    <button className="btn btn-primary px-4 rounded-pill shadow-sm" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Login Modal */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header border-bottom-0 pb-0">
                            <h2 className="modal-title fw-bold" id="loginModalLabel">Welcome Back</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="text-muted mb-4">Please enter your credentials to login.</p>
                            <form onSubmit={handleLogin}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="loginEmail" placeholder="name@example.com" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
                                    <label htmlFor="loginEmail">Email address</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="password" className="form-control" id="loginPassword" placeholder="Password" required value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
                                    <label htmlFor="loginPassword">Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-3 rounded-3 fw-bold shadow-sm">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Register Modal */}
            <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header border-bottom-0 pb-0">
                            <h2 className="modal-title fw-bold" id="registerModalLabel">Create Account</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="text-muted mb-4">Join us to register for amazing events!</p>
                            <form onSubmit={handleRegister}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="regName" placeholder="John Doe" required value={regName} onChange={e => setRegName(e.target.value)} />
                                    <label htmlFor="regName">Full Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="regEmail" placeholder="name@example.com" required value={regEmail} onChange={e => setRegEmail(e.target.value)} />
                                    <label htmlFor="regEmail">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="regPassword" placeholder="Password" required value={regPassword} onChange={e => setRegPassword(e.target.value)} />
                                    <label htmlFor="regPassword">Password</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="password" className="form-control" id="regConfirmPassword" placeholder="Confirm Password" required value={regConfirmPassword} onChange={e => setRegConfirmPassword(e.target.value)} />
                                    <label htmlFor="regConfirmPassword">Confirm Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-3 rounded-3 fw-bold shadow-sm">Create Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;