import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignIn from './components/SignIn';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Register from './components/Register';
import QuestionContainer from './components/Questions/QuestionsContainer';
import './App.css';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [fullName, setFullName] = useState('');

  const handleSignIn = (userData) => {
    setAuthenticated(true);
    setFullName(userData.full_name);
  };

  const handleSettingsClick = () => {
    // Handle settings button click
  };

  return (
    <Router>
      <div className="App">
        <Header
          authenticated={authenticated}
          fullName={fullName}
          onSettingsClick={handleSettingsClick}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="questions/vlsi/physical-design"
            element={
              <QuestionContainer
                authenticated={authenticated}
                sub_field="physical-design"
                field="vlsi"
              />
            }
          />
          <Route
            path="questions/vlsi/design-verification"
            element={
              <QuestionContainer
                authenticated={authenticated}
                sub_field="design-verification"
                field="vlsi"
              />
            }
          />
          <Route
            path="questions/vlsi/vlsi-general"
            element={
              <QuestionContainer
                authenticated={authenticated}
                sub_field="vlsi-general"
                field="vlsi"
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;