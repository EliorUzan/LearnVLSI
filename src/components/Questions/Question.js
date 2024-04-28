import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../../css/Question.css';

const server_localhost = 'http://localhost:3001';

const Question = ({ questionData }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [answerContent, setAnswerContent] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [buttonText, setButtonText] = useState('Reveal Answer');

  const fetchContent = useCallback(async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching HTML content:', error);
      return '<p>Error fetching HTML content</p>';
    }
  }, []);

  const fetchAnswerContent = useCallback(async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching HTML content:', error);
      return '<p>Error fetching HTML content</p>';
    }
  }, []);

  useEffect(() => {
    const fetchQuestionContent = async () => {
      const html_path = `${server_localhost}/questions/${questionData.questionHeadline}/${questionData.questionHTML}`;
      const content = await fetchContent(html_path);
      setHtmlContent(content);
    };

    fetchQuestionContent();
  }, [questionData.questionHeadline, questionData.questionHTML, fetchContent]);

  const handleRevealAnswer = useCallback(async () => {
    const answerPath = `${server_localhost}/questions/${questionData.questionHeadline}/${questionData.answerHTML}`;
    const answerContent = await fetchAnswerContent(answerPath);
    setAnswerContent(answerContent);
    setShowAnswer(!showAnswer);
    setButtonText(showAnswer ? 'Reveal Answer' : 'Collapse Answer');
  }, [showAnswer, questionData.questionHeadline, questionData.answerHTML, fetchAnswerContent]);

  const Q_pic = `${server_localhost}/questions/${questionData.questionHeadline}/${questionData.question_picture}`;
  const A_pic = `${server_localhost}/questions/${questionData.questionHeadline}/${questionData.answer_picture}`;

  return (
    <div className="question-box" key={questionData.questionHeadline}>
      <div className="question-text" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      {questionData.question_picture && <img src={Q_pic} onerror="this.onerror=null; this.remove();" alt="" className="question-img" />}
      <button className="reveal-answer-btn" onClick={handleRevealAnswer}>
        {buttonText}
      </button>
      {showAnswer && (
        <>
          <div className="answer-separator"></div>
          <div className="answer-section">
            <div className="answer-text" dangerouslySetInnerHTML={{ __html: answerContent }} />
            {questionData.answer_picture && <img onerror="this.onerror=null; this.remove();" src={A_pic} alt="" className="answer-img" />}
          </div>
        </>
      )}
    </div>
  );
};

export default Question;