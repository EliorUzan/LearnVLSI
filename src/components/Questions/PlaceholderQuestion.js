import React from 'react';

const PlaceholderQuestion = ({ questionData }) => {
    const html_path = require(questionData.questionHTML)
    console.log(html_path)
  return (
    <div className="question-box">
      <div
        className="question-text"
        dangerouslySetInnerHTML={{ __html: html_path }}
      />
      {questionData.question_picture && <img src={questionData.question_picture} alt="Question" className="question-img" />}
    </div>
  );
};

export default PlaceholderQuestion;