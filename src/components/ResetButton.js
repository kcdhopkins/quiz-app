import React from 'react'
import { useDispatch } from 'react-redux';
import '../assets/styles/resetButton.scss';
import { mapReTake } from '../reducers/mapDispatch';

const ResetButton = props => {

    const dispatch = useDispatch();
    
    return (
        <>
        <input className = "submit" type = "button" value ="Retake" onClick={ () => mapReTake(dispatch, props.questions) }/>
    </>
    )
}

export default ResetButton;
