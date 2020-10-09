
import React from 'react';
import '../assets/styles/question.scss';

const Question = ({question}) =>{

    return (
        <div className="questionHeader">
            <h3>{question.question}</h3>
        </div>
    );
}

export default Question;