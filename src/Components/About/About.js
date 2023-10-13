import React from 'react';
import Navbar from '../Navbar/Navbar';

const About = () => {
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
  };

  const paragraphStyle = {
    marginBottom: '20px',
  };

  const contentStyle = {
    textAlign: 'justify',
    maxWidth: '600px',
  };

  return (<div>
    <Navbar/>
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Our E-Commerce Platform</h1>
      <div style={contentStyle}>
        <p style={paragraphStyle}>
          Welcome to our e-commerce platform! We're dedicated to bringing you a seamless and enjoyable online shopping experience.
        </p>
        <p style={paragraphStyle}>
          At our online store, we offer a wide range of products from electronics, fashion, home decor, beauty products, to sports equipment and more. We carefully curate our selection to ensure you have access to high-quality and trending items at competitive prices.
        </p>
        <p style={paragraphStyle}>
          Our mission is to provide our customers with a secure, user-friendly, and convenient shopping environment. We strive to exceed your expectations by offering excellent customer service, fast shipping, and easy returns.
        </p>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.
        </p>
      </div>
    </div>
    </div>
    );
};

export default About;
