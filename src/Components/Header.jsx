import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="./images/logo/Logo_IIITL.png" alt="Logo" width="40" height="34"
                            className="d-inline-block align-middle me-2" />Event Dashboard</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink end to="/" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Events
                                    </a>
                                    <ul className="dropdown-menu">
                                        <NavLink end to="/dance" className="nav-link">
                                            Dance
                                        </NavLink>
                                        <NavLink end to="/music" className="nav-link">
                                            Music
                                        </NavLink>
                                        <NavLink end to="/drama" className="nav-link">
                                            Drama
                                        </NavLink>
                                        <NavLink end to="/fine-arts" className="nav-link">
                                            Fine Arts
                                        </NavLink>
                                        <NavLink end to="/debate" className="nav-link">
                                            Debate
                                        </NavLink>
                                        <NavLink end to="/coding" className="nav-link">
                                            Coding
                                        </NavLink>
                                        {/* <li><a className="dropdown-item" href="dance.html">Dance</a></li>
                                        <li><a className="dropdown-item" href="music.html">Music</a></li>
                                        <li><a className="dropdown-item" href="drama.html">Drama</a></li>
                                        <li><a className="dropdown-item" href="fine_arts.html">Fine Art</a></li>
                                        <li><a className="dropdown-item" href="debate.html">Debate</a></li>
                                        <li><a className="dropdown-item" href="coding.html">Coding</a></li> */}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink end to="/contact-us" className="nav-link">
                                        Contact Us
                                    </NavLink>
                                    {/* <a className="nav-link" href="contactus.html">Contact Us</a> */}
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                            <div className="mx-2 mt-2 mt-lg-0">
                                <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="loginModalLabel">Login</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Keep me signed in</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="registerModalLabel">Register</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="cexampleInputPassword1" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="cexampleInputPassword1" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="infoModalLabel">Important Notices</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="alert alert-danger">
                                    Please Register before Logging into your account.
                                </div>
                                <div className="alert alert-info mb-0">
                                    Try to participate in maximum events!
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Got it!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;