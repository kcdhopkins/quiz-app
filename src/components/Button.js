import React from 'react';
import { useDispatch } from 'react-redux';
import { mapQuestions, mapTextQuestion } from '../reducers/mapDispatch';


const Button = props => {
    
    const dispatch = useDispatch()
    const questionType = props.question.type;
    const choiceObj = {
        dispatch: dispatch, 
        type: 'setCorrectness', 
        selections: props.inputRef, 
        question: props.question
    }

    return (
        <>
            <input className = "submit" type = "button" value ="Submit" onClick={ () => questionType === "text" ? mapTextQuestion(choiceObj) : mapQuestions(choiceObj)}/>
        </>
    )
}

export default Button
