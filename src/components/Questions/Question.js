import React, { useEffect, useState } from 'react';
import '../../css/Question.css';

// const host = 'http://localhost:3001';

const Question = ({ host, questionData , qHTML, aHTML, showAnswerState }) => {
  const [showAnswer, setShowAnswer] = useState(showAnswerState);
  const [buttonText, setButtonText] = useState(showAnswerState ? 'Collapse Answer' : 'Reveal Answer');

  useEffect(() => {
    const resetAnswerReveal = async () => {
      setShowAnswer(false)
      setButtonText('Reveal Answer')
    } ;

    resetAnswerReveal();
  }, [qHTML]);


  const handleRevealAnswer = (() => {
    setShowAnswer(!showAnswer);
    setButtonText(showAnswer ? 'Reveal Answer' : 'Collapse Answer');
  });

  const Q_pic = `${host}/questions/showQuestion/${questionData.question_picture}`;
  const A_pic = `${host}/questions/showQuestion/${questionData.answer_picture}`;


  return (
    <div className="question-box" key={questionData.questionHeadline}>
      <div className="question-text" dangerouslySetInnerHTML={{ __html: qHTML }} />
      {questionData.question_picture && <img src={Q_pic} onerror="this.onerror=null; this.remove();" alt="" className="question-img" />}
      <button className="reveal-answer-btn" onClick={() => handleRevealAnswer()}>
        {buttonText}
      </button>
      {showAnswer && (
        <>
          <div className="answer-separator"></div>
          <div className="answer-section">
            <div className="answer-text" dangerouslySetInnerHTML={{ __html: aHTML }} />
            {questionData.answer_picture && <img onerror="this.onerror=null; this.remove();" src={A_pic} alt="" className="answer-img" />}
          </div>
        </>
      )}
    </div>
  );
};

export default Question;