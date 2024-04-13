import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignIn from './components/SignIn'; // Import SignIn component
import About from './components/About'; // Import About component
import ContactUs from './components/ContactUs'
import Register from './components/Register'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Use Routes component instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Add more routes for other pages here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
