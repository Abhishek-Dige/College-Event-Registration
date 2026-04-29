import React, { useState, useEffect } from 'react';
import '../style.css';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [registrations, setRegistrations] = useState([]);
  
  const { currentUser } = useAuth();
  const addToast = useToast();

  useEffect(() => {
    preloadDummyData();
    loadRegistrations();
  }, []);

  function preloadDummyData() {
    const existing = JSON.parse(localStorage.getItem("registrations"));
    if (!existing || existing.length === 0) {
      const dummyData = [
        { name: "Aarav Patel", email: "aarav@example.com", eventName: "Dance Battle", time: "2025-11-08 10:30 AM" },
        { name: "Riya Sharma", email: "riya@example.com", eventName: "CodeSprint", time: "2025-11-08 10:45 AM" },
      ];
      localStorage.setItem("registrations", JSON.stringify(dummyData));
    }
  }

  function loadRegistrations() {
    const data = JSON.parse(localStorage.getItem("registrations")) || [];
    setRegistrations(data);
  }

  const handleRegisterClick = (eventName) => {
    if (!currentUser) {
      addToast("Please login or register to apply for events.", "error");
      return;
    }
    setSelectedEvent(eventName);
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      addToast("You must be logged in to register.", "error");
      return;
    }

    const newEntry = { 
      name: currentUser.name, 
      email: currentUser.email, 
      eventName: selectedEvent, 
      time: new Date().toLocaleString() 
    };
    
    const existing = JSON.parse(localStorage.getItem("registrations")) || [];
    
    // Check if user already registered for this event
    if (existing.some(reg => reg.email === currentUser.email && reg.eventName === selectedEvent)) {
      addToast(`You are already registered for ${selectedEvent}.`, "info");
      setShowModal(false);
      return;
    }

    existing.push(newEntry);
    localStorage.setItem("registrations", JSON.stringify(existing));

    loadRegistrations();
    setShowModal(false);
    addToast(`Registration successful for ${selectedEvent}! 🎉`, "success");
  };

  return (
    <>
      <div className="container mt-4">
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade shadow-lg rounded overflow-hidden">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/carousel-images/campus.jpg" className="d-block w-100" alt="..." style={{height: '400px', objectFit: 'cover'}}/> 
            </div>
            <div className="carousel-item">
              <img src="/images/carousel-images/event.jpg" className="d-block w-100" alt="..." style={{height: '400px', objectFit: 'cover'}}/>
            </div>
            <div className="carousel-item">
              <img src="/images/carousel-images/independence.png" className="d-block w-100" alt="..." style={{height: '400px', objectFit: 'cover'}}/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <section id="events" className="py-5" >
        <div className="container text-center text-black">
          <h2 className="mb-4 fw-bold">🎉 Upcoming Events</h2>
          <p className="mb-5 text-muted">Don't miss out on what's happening around campus!</p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 shadow border-0 event-card transition-transform">
                <img src="/images/card-images/dance.jpg" className="card-img-top" alt="Dance Fest" style={{height: '200px', objectFit: 'cover'}}/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">Dance Fest 2025</h5>
                  <p className="text-muted small mb-2"><i className="bi bi-calendar-event"></i> 14th Nov, 2025</p>
                  <p className="card-text flex-grow-1">An unforgettable evening of rhythm and lights featuring student bands!</p>
                  <button className="btn btn-primary mt-auto" onClick={() => handleRegisterClick("Dance Fest 2025")}>
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow border-0 event-card transition-transform">
                <img src="/images/card-images/code.jpg" className="card-img-top" alt="Hackathon" style={{height: '200px', objectFit: 'cover'}}/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">TechSprint Hackathon</h5>
                  <p className="text-muted small mb-2"><i className="bi bi-calendar-event"></i> 28th Nov, 2025</p>
                  <p className="card-text flex-grow-1">24 hours of coding, creativity, and collaboration!</p>
                  <button className="btn btn-primary mt-auto" onClick={() => handleRegisterClick("TechSprint Hackathon")}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Modal for Event Registration */}
      {showModal && (
        <div className="auth-modal-overlay" onClick={() => setShowModal(false)} style={{zIndex: 1060}}>
          <div className="auth-modal-content" onClick={e => e.stopPropagation()}>
            <div className="auth-modal-header border-bottom pb-3 mb-3">
              <h5 className="fw-bold mb-0 text-primary">Confirm Registration</h5>
              <button className="auth-close-btn" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label className="form-label text-muted small fw-bold">Full Name</label>
                <input type="text" className="form-control" readOnly value={currentUser?.name || ''} disabled />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted small fw-bold">Email Address</label>
                <input type="email" className="form-control" readOnly value={currentUser?.email || ''} disabled />
              </div>
              <div className="mb-4">
                <label className="form-label text-muted small fw-bold">Event</label>
                <input type="text" className="form-control bg-light" readOnly value={selectedEvent} />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-success px-4">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section id="data-table" className="container my-5 py-4 bg-white rounded shadow-sm">
        <h2 className="text-center mb-4 fw-bold">Registered Users</h2>
        <div className="table-responsive">
          <table className="table table-hover text-center align-middle" id="userTable">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Event</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length > 0 ? (
                registrations.map((entry, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td className="fw-medium">{entry.name}</td>
                    <td className="text-muted">{entry.email}</td>
                    <td><span className="badge bg-info text-dark">{entry.eventName}</span></td>
                    <td className="text-muted small">{entry.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-muted py-4">No registrations yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="text-end mt-3">
          <button className="btn btn-outline-danger" onClick={() => {
              if (window.confirm("Clear all registrations?")) {
                localStorage.removeItem("registrations");
                loadRegistrations();
                addToast("All registrations cleared", "info");
              }
            }}>
            Clear All Data
          </button>
        </div>
      </section>

      <section className="text-center text-white py-5 mt-5" style={{ background: "linear-gradient(135deg, #2575fc, #ce4095)" }}>
        <div className="container">
          <h1 className="fw-bold display-4 mb-3">IIIT Lucknow Fest 2025 🎉</h1>
          <p className="lead mb-4">Join the most exciting event of the year — register now!</p>
          <button className="btn btn-light btn-lg px-5 fw-bold text-primary shadow-lg" onClick={() => handleRegisterClick("IIIT Lucknow Fest 2025")}>
            Participate Now!
          </button>
        </div>
      </section>
    </>
  );
}

