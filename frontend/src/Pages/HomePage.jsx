import React, { useState, useEffect } from 'react';
import '../style.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap";




export default function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    loadRegistrations();

    // Check sessionStorage so infoModal only pops up once per session
    if (!sessionStorage.getItem("infoModalShown")) {
      const modalEl = document.getElementById("infoModal");
      if (!modalEl) return;
      
      let infoModal = bootstrap.Modal.getInstance(modalEl);
      if (!infoModal) {
        infoModal = new bootstrap.Modal(modalEl);
      }
      infoModal.show();
      
      sessionStorage.setItem("infoModalShown", "true");

      return () => {
        // Cleanup to prevent locking scroll / double backdrop in strict mode
        infoModal.hide();
      };
    }
  }, []);

// Populate table with data from backend
async function loadRegistrations() {
  try {
    const response = await fetch("http://localhost:8080/api/data");
    const data = await response.json();
    setRegistrations(data);
  } catch (error) {
    console.error("Error loading registrations:", error);
  }
}

// Handles form submission
async function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const eventName = selectedEvent;

  if (!name || !email) {
    alert("Please fill out all fields!");
    return;
  }

  const newEntry = { name, email, eventName, time: new Date().toLocaleString() };

  try {
    const response = await fetch("http://localhost:8080/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    loadRegistrations();

    const modalEl = document.getElementById("applyModal");
    let modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) {
      modal.hide();
    }
    
    // Fallback: React sometimes interrupts Bootstrap's transition, leaving the backdrop stranded
    setTimeout(() => {
      modalEl.classList.remove("show");
      modalEl.style.display = "none";
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.removeAttribute("data-bs-overflow");
      document.body.removeAttribute("data-bs-padding-right");
      document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
    }, 400);

    e.target.reset();
  } catch (error) {
    console.error("Error registering:", error);
    alert("Failed to register. Please try again.");
  }
}



  return (
    <>
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
    <h2 className="mb-4 fw-bold"> Upcoming Events</h2>
    <p className="mb-5">Don't miss out on what's happening around campus!</p>

    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100 shadow-lg border-0 event-card">
          <img src="/images/card-images/dance.jpg" className="card-img-top" alt="Dance Fest" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Dance Fest 2025</h5>
            <p className="text-muted small mb-2"><i className="bi bi-calendar-event"></i> 14th Nov, 2025</p>
            <p className="card-text">An unforgettable evening of rhythm and lights featuring student bands!</p>
         <button
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#applyModal"
  onClick={() => setSelectedEvent("Dance Fest 2025")}
>
  Register
</button>

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
            <button
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#applyModal"
  onClick={() => setSelectedEvent("TechSprint Hackathon")}
>
  Register
</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  <div className="modal fade" id="applyModal" tabIndex="-1" aria-labelledby="applyModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-primary text-white">
          <h5 className="modal-title" id="applyModalLabel">Event Registration {selectedEvent ? `for: ${selectedEvent}` : ''}</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="eventForm" onSubmit={handleFormSubmit}>

          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="event" className="form-label">Event</label>
              <input type="text" id="event" className="form-control" readOnly value={selectedEvent} />
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
      <tbody>
        {registrations.map((entry, index) => (
          <tr key={entry.id || index}>
            <th scope="row">{index + 1}</th>
            <td>{entry.name}</td>
            <td>{entry.email}</td>
            <td>{entry.eventName}</td>
            <td>{entry.time}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <button
  className="btn btn-danger"
  id="clearDataBtn"
  onClick={async () => {
    if (window.confirm("Clear all registrations?")) {
      try {
        await fetch("http://localhost:8080/api/data", { method: "DELETE" });
        loadRegistrations();
      } catch (error) {
        console.error("Error clearing data:", error);
      }
    }
  }}
>
  Clear All Data
</button>

  </section>

<section
  className="text-center text-white"
  style={{ background: "linear-gradient(135deg, #2575fc, #ce4095)" }}
>
  <h1 className="fw-bold display-4">IIIT Lucknow Fest 2025 </h1>
  <p className="lead">Join the most exciting event of the year — register now!</p>
  <button
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#applyModal"
  onClick={() => setSelectedEvent("IIIT Lucknow Fest 2025")}
>
  Participate Now!
</button>

</section>
    </>
  );
}
