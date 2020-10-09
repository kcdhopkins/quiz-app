import React from 'react';
import '../assets/styles/answerselection.scss';
import Boolean from './Boolean';
import MultiChoice from './MultiChoice';
import Text from './Text';

const AnswerSelection = ({question}) => {
    
    let component;
   
    switch(question.type){
        case 'multiple':
                component = <MultiChoice question={question}/>;
            break;
        case 'boolean':
                component = <Boolean question={question}/>;
            break;
        case 'text': 
                component = <Text question={question}/>;
            break;
        default:
                component = <h3>Waiting for Data....</h3>
    }

    return (
        <div className="answerscontainer">
            <div className="divider">
                {component}
            </div>
        </div>
    )
}

export default AnswerSelection;
