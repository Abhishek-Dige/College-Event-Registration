import React from 'react';
import '../style.css'
export default function HomePage() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="/images/logo/Logo_IIITL.png"
                alt="Logo"
                width="40"
                height="34"
                className="d-inline-block align-middle me-2"
              />
              Event Dashboard
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Events
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="dance.html">Dance</a></li>
                    <li><a className="dropdown-item" href="music.html">Music</a></li>
                    <li><a className="dropdown-item" href="drama.html">Drama</a></li>
                    <li><a className="dropdown-item" href="fine_arts.html">Fine Art</a></li>
                    <li><a className="dropdown-item" href="debate.html">Debate</a></li>
                    <li><a className="dropdown-item" href="coding.html">Coding</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contactus.html">
                    Contact Us
                  </a>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>

              <div className="mx-2 mt-2 mt-lg-0">
                <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#loginModal">
                  Login
                </button>
                <button className="btn btn-danger ms-2" data-bs-toggle="modal" data-bs-target="#registerModal">
                  Register
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* LOGIN MODAL */}
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="loginModalLabel">Login</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="loginEmail" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="loginPassword" />
                  </div>

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="loginCheck" />
                    <label className="form-check-label" htmlFor="loginCheck">Keep me signed in</label>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* REGISTER MODAL */}
        <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="registerModalLabel">Register</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="regEmail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="regEmail" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="regPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="regPassword" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="regConfirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="regConfirmPassword" />
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* INFO MODAL */}
        <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="infoModalLabel">Important Notices</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <div className="alert alert-danger">Please Register before Logging into your account.</div>
                <div className="alert alert-info mb-0">Try to participate in maximum events!</div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/carousel-images/campus.jpg" className="d-block w-100" alt="..." /> 
        </div>
        <div className="carousel-item">
          <img src="/images/carousel-images/event.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="/images/carousel-images/independence.png" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <section id="events" className="py-5" >
  <div className="container text-center text-black">
    <h2 className="mb-4 fw-bold">🎉 Upcoming Events</h2>
    <p className="mb-5">Don't miss out on what's happening around campus!</p>

    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100 shadow-lg border-0 event-card">
          <img src="/images/card-images/dance.jpg" className="card-img-top" alt="Dance Fest" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Dance Fest 2025</h5>
            <p className="text-muted small mb-2"><i className="bi bi-calendar-event"></i> 14th Nov, 2025</p>
            <p className="card-text">An unforgettable evening of rhythm and lights featuring student bands!</p>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#applyModal">Register</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 shadow-lg border-0 event-card">
          <img src="/images/card-images/code.jpg" className="card-img-top" alt="Hackathon" />
          <div className="card-body">
            <h5 className="card-title fw-bold">TechSprint Hackathon</h5>
            <p className="text-muted small mb-2"><i className="bi bi-calendar-event"></i> 28th Nov, 2025</p>
            <p className="card-text">24 hours of coding, creativity, and collaboration!</p>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#applyModal">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  <div className="modal fade" id="applyModal" tabindex="-1" aria-labelledby="applyModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-primary text-white">
          <h5 className="modal-title" id="applyModalLabel">Event Registration</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="eventForm">
          <div className="modal-body">
            <div className="mb-3">
              <label for="name" className="form-label">Full Name</label>
              <input type="text" id="name" className="form-control" required />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label for="event" className="form-label">Event</label>
              <input type="text" id="event" className="form-control" readonly />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <section id="data-table" className="container ">
    <h2 className="text-center mb-4">Registered Users</h2>
    <table className="table table-striped table-hover text-center" id="userTable">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Event</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <div className="text-center mt-3">
      <button className="btn btn-danger" id="clearDataBtn">Clear All Data</button>
    </div>
  </section>

<section
  className="text-center text-white"
  style={{ background: "linear-gradient(135deg, #2575fc, #ce4095)" }}
>
  <h1 className="fw-bold display-4">IIIT Lucknow Fest 2025 🎉</h1>
  <p className="lead">Join the most exciting event of the year — register now!</p>
  <a
    href="#"
    className="btn btn-light btn-lg"
    data-bs-toggle="modal"
    data-bs-target="#applyModal"
    data-event="IIIT Lucknow Fest 2025"
  >
    Register Now!
  </a>
</section>



  <footer className="bg-dark text-white text-center py-3">
    <p>© 2025 Event Dashboard | Designed by Team Spiders</p>
  </footer>
    </>
  );
}
