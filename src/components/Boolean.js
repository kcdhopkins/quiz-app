
import React, { useEffect, useRef } from 'react';
import Button from './Button';

const Boolean = ({question}) => {

    const inputRef = useRef([]);

    useEffect(()=>{
        inputRef.current.forEach( el => el.checked = false);
    });
    
    return (<>
                <label htmlFor ="selection1">
                    <input ref ={ e => inputRef.current[0] = e} type="radio" name = "question" value = "true" />
                    <span>True</span>
                </label>
                <label htmlFor ="selection2">
                    <input ref ={ e => inputRef.current[1] = e} type="radio" name = "question" value ="false" />
                    <span>False</span>
                </label>
                <Button 
                    inputRef = {inputRef}
                    question = {question}
                />
            </>
    )
}

export default Boolean
