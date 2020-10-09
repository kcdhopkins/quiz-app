
import React, { useEffect, useRef } from 'react';
import * as helpers from '../helpers/helpers';
import Button from './Button';


const MultiChoice = ({question}) => {

    const inputRef = useRef([]);
    const notSortedChoices = [...question.incorrect_answers, question.correct_answer];
    const randomChoices = [];

    while(notSortedChoices.length){
        randomChoices.push(helpers.randomizer(notSortedChoices));
    }

    const choiceInputs = randomChoices.map( (choice, index) => {
                return(
                    <label key={`question_${index}`} htmlFor ={`question_${index}`}>
                        <input ref = { e => inputRef.current[index] = e }type="radio" name = "question" value={choice}/>
                        <span>{choice}</span>
                    </label>
                )
    });

    useEffect (()=>{
        inputRef.current.forEach( e => e.checked = false );
    });
    
    return (
        <>
            {choiceInputs}
            <Button 
                inputRef = {inputRef}
                question = {question}
            />
        </>
    )
}

export default MultiChoice;
