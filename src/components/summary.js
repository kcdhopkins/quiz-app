import React from "react";
import ResetButton from "./ResetButton";

const Summary = props => {
     const correct = props.correctQuestions.length;
     const wrong = props.incorrectQuestions.length;
     const totalQuestionsAnswered = wrong + correct;
     const finalScore = Math.round((correct / totalQuestionsAnswered) * 100);
     const resetQuestions = [...props.correctQuestions, ...props.incorrectQuestions, ...props.unAnsweredQuestions];
    return (<div>
        <h2 style={{marginBottom: '10px'}}>Summary</h2>
        <ul style={{paddingLeft: '0', listStyle: 'none'}}>
            <li>Correct: {correct}</li>
            <li>Wrong: {wrong}</li>
            <li>Questions answered: {totalQuestionsAnswered}</li>
            <li>Final Score: {!correct && !wrong ? 'No questions answered' : `${finalScore}%`}</li>
        </ul>
        <ResetButton questions={resetQuestions}/>
    </div>);
}

export default Summary;