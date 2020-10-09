import React, { useEffect, useRef } from 'react';
import Button from './Button';

const Text = ({question}) => {
    const inputRef = useRef([]);

    useEffect(()=>{
        inputRef.current.forEach( el => el.value = "");
    });
 
    return (<>
                <label htmlFor ="question2">
                    <input ref = { e => inputRef.current[0] = e } type="text" name = "question"/>
                </label>
                <Button 
                    inputRef = {inputRef}
                    question = {question}
                />
            </>
    )
}

export default Text