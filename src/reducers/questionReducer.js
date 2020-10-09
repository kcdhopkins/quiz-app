
const questionReducer = (state, action) => {
    if(!state){
        return ({
            incorrectQuestions: [],
            correctQuestions:[],
            unAnsweredQuestions: []
        });
    }

    let newState = {};

    switch(action.type){
        case 'setCorrectness':
            const checkedChoice = action.selections.current.filter( el => el.checked === true);
            if(checkedChoice.length){
                if (action.question.type !== "boolean" ? checkedChoice[0].value === action.question.correct_answer : checkedChoice[0].value === action.question.correct_answer.toLowerCase() ){
                    newState = {
                        ...state,
                        correctQuestions: [...state.correctQuestions, action.question]
                    }
                } else {
                    newState = {
                        ...state,
                        incorrectQuestions: [...state.incorrectQuestions, action.question]
                    }
                }
            } else {
                newState = {
                    ...state,
                    unAnsweredQuestions: [...state.unAnsweredQuestions, action.question]
                }
            }
        break;
        case 'setTextCorrectness':
            const choice = action.selections.current[0].value;
            const correctAnswer = action.question.correct_answer;
            if(choice){
                if(choice === correctAnswer){
                    newState = {
                        ...state,
                        correctQuestions: [...state.correctQuestions, action.question]
                    }
                } else{
                    newState = {
                        ...state,
                        incorrectQuestions: [...state.incorrectQuestions, action.question]
                    }
                }
            }else{
                newState = {
                    ...state,
                    unAnsweredQuestions: [...state.unAnsweredQuestions, action.question]
                }
            }
        break;
        case 'resetQuestions':
            newState = {
                incorrectQuestions: [],
                correctQuestions:[],
                unAnsweredQuestions: []
            }
        break;
        default:
            newState = {...state};
    }
    return newState;
}

export default questionReducer
