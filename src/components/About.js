import React from 'react';
import '../css/About.css'; // Reusing the Home component CSS for now

const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec semper magna.
        Vestibulum placerat pretium nisl vel vulputate. Morbi eget tortor est.
      </p>
      <img
        src="https://via.placeholder.com/400x200"
        alt="Placeholder Image"
        className="about-image"
      />
      <p>
        Nullam venenatis, mauris sit amet efficitur tincidunt, nisi mauris vehicula arcu,
        sit amet efficitur orci elit a nulla. Cras fermentum nunc quis hendrerit blandit.
      </p>
      {/* Add more content here */}
    </div>
  );
};

export default About;
