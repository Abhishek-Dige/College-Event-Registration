import React from "react";
import "../styles/contactus-styles/contactus_style.css"

function ContactUs() {
    return (
        <div className="contact-page">
            <form className="contact-form">
                <h2 className="mb-4 text-center">Contact Us - IIIT Lucknow</h2>


                <div className="mb-3">
                    <label for="name" className="frm-label">Full Name</label>
                    <input type="text" className="frm-control" id="name" placeholder="Enter your full name" required />
                </div>
                <br />

                <div className="mb-3">
                    <label for="email" className="frm-label">Email Address</label>
                    <input type="email" className="frm-control" id="email" placeholder="name@iiitl.ac.in" aria-describedby="emailHelp" required />
                    <br />
                    <br />
                    <div id="emailHelp" className="frm-text">We'll never share your email with anyone else.</div>
                    <br />
                </div>
                <br />

                <div className="mb-3">
                    <label for="phone" className="frm-label">Phone Number</label>
                    <input type="tel" className="frm-control" id="phone" placeholder="+91 XXXXX XXXXX" required />
                    <br />
                </div>
                <br />

                <div className="mb-3">
                    <label for="subject" className="frm-label">Subject</label>
                    <input type="text" className="frm-control" id="subject" placeholder="Enter the subject" required />
                    <br />
                </div>
                <br />
                <div className="mb-3">
                    <br />
                    <label for="message" className="frm-label">Message</label>
                    <br />
                    <textarea className="frm-control" id="message" rows="4" placeholder="Write your message here..." required></textarea>
                    <br />
                </div>
                <br />

                <div className="mb-3 frm-check">
                    <input type="checkbox" className="frm-check-input" id="agreement" required />
                    <label className="frm-check-label" for="agreement">I confirm that the information provided is correct.</label>
                    <br />
                </div>
                <br />

                <button type="submit" className="button button-primary w-100">Send Message</button>
                <br />
            </form>

        </div>
    )
}

export default ContactUs;