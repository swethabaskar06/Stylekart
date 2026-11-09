import React, { useState } from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <p>WE ARE HERE TO HELP</p>
        <h1>Contact Us</h1>
        <p>
          Have a question or need assistance?
          We would love to hear from you!
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <span className="contact-small-title">
            GET IN TOUCH
          </span>

          <h2>Let's Talk!</h2>

          <p className="contact-info-description">
            Have questions about our products or your shopping
            experience? Send us a message using the form.
          </p>

          <div className="contact-info-card">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email Support</h3>
              <p>Send us your questions through the contact form.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">🛍️</div>
            <div>
              <h3>Shopping Assistance</h3>
              <p>We are happy to help with your shopping queries.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">💬</div>
            <div>
              <h3>Customer Support</h3>
              <p>Your feedback and satisfaction matter to us.</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-box">

          <h2>Send Us a Message</h2>

          {submitted && (
            <div className="contact-success">
              Thank you! Your message has been submitted.
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <label htmlFor="contact-name">Full Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Write your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />


            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>

          </form>
        </div>

      </section>

      {/* Bottom Section */}
      <section className="contact-bottom">
        <h2>Thank You for Choosing StyleCart!</h2>
        <p>
          Your style, your choice, our happiness.
        </p>
      </section>

    </div>
  );
}

export default ContactPage;