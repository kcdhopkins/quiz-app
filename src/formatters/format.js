 
const formatter = questions => {
    questions.forEach( (questionObj, index, thisArr) =>{
        if(questionObj.type === 'text'){
            thisArr[index].question = questionObj.question.replace(/&quot;/g, "\"").replace(/&#039;/g, "'");
            return;
        }
        
        thisArr[index].correct_answer = questionObj.correct_answer.replace(/&quot;/g, "\"").replace(/&#039;/g, "'");
        thisArr[index].incorrect_answers = questionObj.incorrect_answers.map( incorrectAnswer => incorrectAnswer.replace(/&quot;/g, "\"").replace(/&#039;/g, "'") );
        thisArr[index].question = questionObj.question.replace(/&quot;/g, "\"").replace(/&#039;/g, "'");
    });

    return Object.assign({}, questions);
}

export default formatter;