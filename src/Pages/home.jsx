import React from "react";
import "./style.css";

function Home() {
    return (
        <div>
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
                            <img src="./images/carousel-images/campus.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/carousel-images/event.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/carousel-images/independence.png" className="d-block w-100" alt="..." />
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
                                <img src="./images/card-images/dance.jpg" className="card-img-top" alt="Dance Fest" />
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
                                <img src="./images/card-images/code.jpg" className="card-img-top" alt="Hackathon" />
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

            <section className="text-center text-white " id="fest">
                <h1 className="fw-bold display-4">IIIT Lucknow Fest 2025 🎉</h1>
                <p className="lead">Join the most exciting event of the year — register now!</p>
                <a href="#" className="btn btn-light btn-lg" data-bs-toggle="modal" data-bs-target="#applyModal" data-event="IIIT Lucknow Fest 2025">Register Now!</a>
            </section>


            {/* <footer className="bg-dark text-white text-center py-3">
                <p>© 2025 Event Dashboard | Designed by Team Spiders</p>
            </footer>

            <script src="script.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script> */}

        </div>
    )
}

export default Home;