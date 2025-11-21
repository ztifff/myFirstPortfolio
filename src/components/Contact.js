import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! Message sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="container py-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2
        className="text-center mb-4"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="mb-3" data-aos="fade-right" data-aos-delay="100">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3" data-aos="fade-left" data-aos-delay="200">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3" data-aos="fade-right" data-aos-delay="300">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
