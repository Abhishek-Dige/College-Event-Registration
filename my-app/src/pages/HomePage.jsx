import React from 'react';
import '../style.css';
import  { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap";




export default function HomePage() {
  useEffect(() => {
  preloadDummyData();
  loadRegistrations();

  const infoModal = new bootstrap.Modal(document.getElementById("infoModal"));
  infoModal.show();
}, []);
  // Loads dummy data into localStorage IF empty
function preloadDummyData() {
  const existing = JSON.parse(localStorage.getItem("registrations"));
  if (!existing || existing.length === 0) {
    const dummyData = [
      { name: "Aarav Patel", email: "aarav@example.com", eventName: "Dance Battle", time: "2025-11-08 10:30 AM" },
      { name: "Riya Sharma", email: "riya@example.com", eventName: "CodeSprint", time: "2025-11-08 10:45 AM" },
      { name: "Neha Mehta", email: "neha@example.com", eventName: "Drama Fiesta", time: "2025-11-08 11:00 AM" },
      { name: "Aditya Verma", email: "aditya@example.com", eventName: "Music Mania", time: "2025-11-08 11:15 AM" },
      { name: "Priya Singh", email: "priya@example.com", eventName: "Fine Art Expo", time: "2025-11-08 11:30 AM" },
    ];
    localStorage.setItem("registrations", JSON.stringify(dummyData));
  }
}

// Populate table with data
function loadRegistrations() {
  const tableBody = document.querySelector("#userTable tbody");
  const data = JSON.parse(localStorage.getItem("registrations")) || [];
  tableBody.innerHTML = "";
  data.forEach((entry, index) => {
    tableBody.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${entry.name}</td>
        <td>${entry.email}</td>
        <td>${entry.eventName}</td>
        <td>${entry.time}</td>
      </tr>`
    );
  });
}

// Handles clicking "Register"
function handleRegisterClick(eventName) {
  const eventInput = document.querySelector("#event");
  const modalTitle = document.querySelector("#applyModalLabel");
  if (eventInput) eventInput.value = eventName;
  if (modalTitle) modalTitle.textContent = `Registering for: ${eventName}`;
}

// Handles form submission
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const eventName = document.querySelector("#event").value.trim();

  if (!name || !email) {
    alert("Please fill out all fields!");
    return;
  }

  const newEntry = { name, email, eventName, time: new Date().toLocaleString() };
  const existing = JSON.parse(localStorage.getItem("registrations")) || [];

  existing.push(newEntry);
  localStorage.setItem("registrations", JSON.stringify(existing));

  loadRegistrations();

  const modal = bootstrap.Modal.getInstance(document.getElementById("applyModal"));
  modal.hide();
  alert(`Registration successful for ${eventName}! 🎉`);

  e.target.reset();
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
         <button
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#applyModal"
  onClick={() => handleRegisterClick("Dance Fest 2025")}
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
  onClick={() => handleRegisterClick("TechSprint Hackathon")}
>
  Register
</button>

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
              <input type="text" id="event" className="form-control" readOnly  />
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

    <button
  className="btn btn-danger"
  id="clearDataBtn"
  onClick={() => {
    if (confirm("Clear all registrations?")) {
      localStorage.removeItem("registrations");
      loadRegistrations();
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
  <h1 className="fw-bold display-4">IIIT Lucknow Fest 2025 🎉</h1>
  <p className="lead">Join the most exciting event of the year — register now!</p>
  <button
  className="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#applyModal"
  onClick={() => handleRegisterClick("Dance Fest 2025")}
>
  Participate Now!
</button>

</section>
    </>
  );
}
