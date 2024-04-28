import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import { Link } from 'react-router-dom';
import '../../css/css_vars.css'
import '../../css/QuestionsContainer.css';

const QuestionContainer = ({ authenticated, pageName }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchQuestion = async () => {
      if (authenticated) {
        try {
          const response = await axios.get(`http://localhost:3001/questions/${pageName}`);
          const data = response.data;
          if (data.ok) {
            setCurrentQuestion(data);
            setErrorMessage('');
          } else {
            setErrorMessage('Error retrieving question from server');
          }
        } catch (error) {
          console.error('Error fetching question:', error);
          setErrorMessage('Error retrieving question from server');
        }
      }
    };

    fetchQuestion();
  }, [authenticated, pageName]);

  if (!authenticated) {
    return (
      <div className="question-container">
        <div className="auth-buttons">
          <Link to="/signin" className="auth-btn">
            Sign In
          </Link>
          <Link to="/register" className="auth-btn">
            Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="question-container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {currentQuestion && (
        <Question
          questionData={currentQuestion}
        />
      )}
    </div>
  );
};

export default QuestionContainer;