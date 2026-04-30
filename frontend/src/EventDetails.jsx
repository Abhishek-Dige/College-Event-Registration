import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "./services/api";
import toast from "react-hot-toast";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!id) return;
    api.fetchProtected(`http://localhost:8080/api/events/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => {
        setEvent(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Join me at ${event.name}!`,
          text: `Hey, check out ${event.name} at IIIT Lucknow Fest!`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      toast.success("Link copied to clipboard!");
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = document.querySelector("#registerName").value.trim();
    const email = document.querySelector("#registerEmail").value.trim();

    if (!name || !email) {
      toast.error("Please fill out all fields!");
      return;
    }

    setIsSubmitting(true);
    const newEntry = { name, email, eventName: event.name, time: new Date().toLocaleString() };

    try {
      const response = await api.fetchProtected("http://localhost:8080/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry)
      });

      if (!response.ok) throw new Error("Network response was not ok");
      
      e.target.reset();
      toast.success(`Successfully registered for ${event.name}!`);
    } catch (error) {
      console.error("Error registering:", error);
      toast.error("Failed to register. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="container mt-5 text-center py-5">
        <h2 className="text-danger fw-bold mb-3">Oops! Event Not Found.</h2>
        <p className="text-muted mb-4">We couldn't load the details for this event.</p>
        <button className="btn btn-primary rounded-pill px-4" onClick={() => navigate('/')}>
          <i className="bi bi-arrow-left me-2"></i>Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ animation: "fadeIn 0.5s ease-in" }}>
      <button className="btn btn-light shadow-sm rounded-pill mb-4 px-4 text-primary fw-bold" onClick={() => navigate('/')}>
        <i className="bi bi-arrow-left me-2"></i>Back to Events
      </button>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Main Detail Card */}
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden mb-5">
            <div className="bg-primary bg-gradient p-5 text-white text-center position-relative">
              <span className="badge bg-white text-primary position-absolute top-0 start-0 m-4 shadow-sm px-3 py-2 fs-6 rounded-pill">
                {event.club}
              </span>
              <h1 className="fw-bold display-4 mt-4 mb-2">{event.name}</h1>
              <p className="lead mb-0 opacity-75">{event.wing}</p>
            </div>
            
            <div className="card-body p-5">
              <div className="d-flex align-items-center mb-4 text-muted bg-light p-3 rounded-4">
                <i className="bi bi-calendar-event fs-3 me-3 text-primary"></i>
                <h5 className="mb-0 fw-bold text-dark">{event.date}</h5>
              </div>
              
              <h4 className="fw-bold text-dark mb-3">About The Event</h4>
              <p className="text-muted fs-5 lh-lg mb-4" style={{ textAlign: 'justify' }}>
                {event.description}
              </p>

              <hr className="my-5 opacity-25" />

              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                <button className="btn btn-outline-primary rounded-pill px-5 py-2 w-100 fw-bold" onClick={handleShare}>
                  <i className="bi bi-share-fill me-2"></i> Share Event
                </button>
                <a href="#registerSection" className="btn btn-primary rounded-pill px-5 py-2 w-100 fw-bold shadow-sm">
                  Register Now <i className="bi bi-arrow-down ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Registration Section */}
          <div id="registerSection" className="card shadow border-0 rounded-4 overflow-hidden">
            <div className="bg-light border-bottom p-4">
              <h3 className="fw-bold text-dark mb-0 text-center"><i className="bi bi-person-plus-fill me-2 text-success"></i>Secure Your Spot</h3>
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <label htmlFor="registerName" className="form-label fw-bold text-muted">Full Name</label>
                  <input type="text" id="registerName" className="form-control form-control-lg bg-light border-0" placeholder="e.g. John Doe" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="registerEmail" className="form-label fw-bold text-muted">Email Address</label>
                  <input type="email" id="registerEmail" className="form-control form-control-lg bg-light border-0" placeholder="john@example.com" required />
                </div>
                <div className="d-grid mt-5">
                  <button type="submit" className="btn btn-success btn-lg rounded-pill shadow-sm fw-bold" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Confirm Registration"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
