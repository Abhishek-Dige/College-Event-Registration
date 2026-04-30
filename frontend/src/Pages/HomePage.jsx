import React, { useState, useEffect } from 'react';
import '../style.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap";
import { api } from "../services/api";
import toast from "react-hot-toast";




export default function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [filterClub, setFilterClub] = useState("All");
  const [filterWing, setFilterWing] = useState("All");

  const getClubIcon = (clubName) => {
    if (!clubName) return "bi-calendar-star";
    const name = clubName.toLowerCase();
    if (name.includes("dance")) return "bi-music-note-beamed";
    if (name.includes("music") || name.includes("sing")) return "bi-mic";
    if (name.includes("tech") || name.includes("code") || name.includes("hack")) return "bi-laptop";
    if (name.includes("art") || name.includes("design") || name.includes("paint")) return "bi-palette";
    if (name.includes("drama") || name.includes("theatre") || name.includes("act")) return "bi-masks";
    if (name.includes("sport") || name.includes("game") || name.includes("athlet")) return "bi-trophy";
    if (name.includes("photo") || name.includes("camera") || name.includes("film")) return "bi-camera";
    if (name.includes("literary") || name.includes("debate") || name.includes("book")) return "bi-book";
    return "bi-star";
  };

  const handleShare = async (eventName) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Join me at ${eventName}!`,
          text: `Hey, check out ${eventName} at IIIT Lucknow Fest 2025!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback if Web Share API is not supported
      alert(`Share feature not supported on this browser. Copy the link: ${window.location.href}`);
    }
  };

  useEffect(() => {
    loadRegistrations();
    loadEvents();
    // removed automatic infoModal popup
  }, []);

  async function loadEvents() {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL.replace('/auth', '') : 'http://localhost:8080';
      const response = await api.fetchProtected(`${baseUrl}/api/events`);
      if (response.ok) {
        const data = await response.json();
        setEventsList(data);
      }
    } catch (error) {
      console.error("Error loading events:", error);
    }
  }

  const filteredEvents = eventsList.filter(event => {
    return (filterClub === "All" || event.club === filterClub) &&
           (filterWing === "All" || event.wing === filterWing);
  });

async function loadRegistrations() {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL.replace('/auth', '') : 'http://localhost:8080';
    const response = await api.fetchProtected(`${baseUrl}/api/data`);
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
    toast.error("Please fill out all fields!");
    return;
  }

  const newEntry = { name, email, eventName, time: new Date().toLocaleString() };

  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL.replace('/auth', '') : 'http://localhost:8080';
    const response = await api.fetchProtected(`${baseUrl}/api/data`, {
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
    toast.success("Successfully registered for the event!");
  } catch (error) {
    console.error("Error registering:", error);
    toast.error("Failed to register. Please try again.");
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
  <div className="container text-center">
    <h2 className="mb-4 fw-bold"> Upcoming Events</h2>
    <p className="mb-5">Don't miss out on what's happening around campus!</p>

    <div className="d-flex justify-content-center mb-4 gap-3">
      <select className="form-select w-auto" value={filterClub} onChange={(e) => setFilterClub(e.target.value)}>
        <option value="All">All Clubs</option>
        {[...new Set(eventsList.map(e => e.club))].filter(Boolean).map(club => (
          <option key={club} value={club}>{club}</option>
        ))}
      </select>
      <select className="form-select w-auto" value={filterWing} onChange={(e) => setFilterWing(e.target.value)}>
        <option value="All">All Wings</option>
        {[...new Set(eventsList.map(e => e.wing))].filter(Boolean).map(wing => (
          <option key={wing} value={wing}>{wing}</option>
        ))}
      </select>
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-4">
      {filteredEvents.length > 0 ? filteredEvents.map((event) => (
        <div className="col" key={event.id}>
          <div className="card h-100 shadow-lg border-0 event-card">
            <div className="card-img-top d-flex align-items-center justify-content-center bg-body-secondary text-primary" style={{ height: "180px", fontSize: "4rem" }}>
              <i className={`bi ${getClubIcon(event.club)}`}></i>
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">{event.name}</h5>
              <p className="text-muted small mb-2">
                <i className="bi bi-calendar-event"></i> {event.date} | {event.club} ({event.wing})
              </p>
              <p className="card-text">{event.description}</p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#applyModal"
                  onClick={() => setSelectedEvent(event.name)}
                >
                  Register
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handleShare(event.name)}
                  title="Share this event"
                >
                  <i className="bi bi-share"></i> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )) : (
        <div className="col-12 text-center text-muted">No events found matching the filters.</div>
      )}
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
        const baseUrl = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL.replace('/auth', '') : 'http://localhost:8080';
        await api.fetchProtected(`${baseUrl}/api/data`, { method: "DELETE" });
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
