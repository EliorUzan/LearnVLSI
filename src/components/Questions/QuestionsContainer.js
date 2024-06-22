import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import { Link } from 'react-router-dom';
import '../../css/css_vars.css';
import '../../css/QuestionsContainer.css';

// const host = "http://localhost:3001"
const host = "https://server-learnvlsi.fly.dev"

const QuestionContainer = ({ authenticated, field, sub_field }) => {
  const [QList, setQList] = useState([]);
  const [currentQuestionData, setCurrentQuestionData] = useState({});
  const [currentQhtml, setCurrentQhtml] = useState('');
  const [currentAhtml, setCurrentAhtml] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [Qindex, setQindex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${host}/getRandomQlist/${field}/${sub_field}`);
        const data = response.data;
        if (data.ok) {
          setQList(data.QList);
        } else {
          setErrorMessage('Error retrieving question list from server');
        }
      } catch (error) {
        console.error('Error fetching question list:', error);
        setErrorMessage('Error retrieving question list from server');
      }
    };

    fetchData();
  }, [field, sub_field]);

  useEffect(() => {
    const fetchQuestion = async () => {
      
      if (authenticated && QList.length > 0) {
        try {
          const response = await axios.get(`${host}/questions/getQuestion/${QList[Qindex]}`);
          const data = response.data;
          console.log('getQuestion: ',data)
          if (data.ok) {
            const qHtml_resp = await axios.get(`${host}/questions/showQuestion/${data.questionHTML}`);
            const aHtml_resp = await axios.get(`${host}/questions/showQuestion/${data.answerHTML}`);
            const qHtml = qHtml_resp.data
            const aHtml = aHtml_resp.data
            setCurrentQhtml(qHtml);
            setCurrentAhtml(aHtml);
            setCurrentQuestionData(data);
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
  }, [authenticated, Qindex, QList]);

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
      {currentQuestionData && (
        <Question
          host={host}
          questionData={currentQuestionData}
          qHTML={currentQhtml}
          aHTML={currentAhtml}
          showAnswerState={false}
        />
      )}
      <button className="next-question-btn" onClick={() => setQindex(Qindex + 1)}>
        Next Question
      </button>
    </div>
  );
};

export default QuestionContainer;
