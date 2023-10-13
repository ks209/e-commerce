import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending the message)
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const containerStyle = {
    padding: '20px',
    border: '5px solid #000000',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    justifyContent: 'space-between',
  };

  const headingStyle = {
    fontSize: '2em',
    color: 'white',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '20px',
    width: '100%',
    color: 'white',
  };

  const textareaStyle = {
    padding: '10px',
    marginBottom: '20px',
    width: '100%',
    height: '150px',
    color: 'white',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'blueviolet',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (<>
    <Navbar/>
    <div style={containerStyle}>
        
      <h1 style={headingStyle}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Contact;
