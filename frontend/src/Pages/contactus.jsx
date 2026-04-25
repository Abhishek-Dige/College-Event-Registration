import React from "react";
import '../styles/contactus-styles/contactus_style.css'
function ContactUs() {
  return (
    <>
    <div className="contact-page">
      <form className="container my-5" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4 text-center">Contact Us - IIIT Lucknow</h2>

        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@iiitl.ac.in"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>

        {/* Subject */}
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Enter the subject"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        {/* Agreement */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreement"
            required
          />
          <label className="form-check-label" htmlFor="agreement">
            I confirm that the information provided is correct.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
      </div>
    </>
  );
}

export default ContactUs;
