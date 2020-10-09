import formatData from '../formatters/format';
import * as helper from '../helpers/helpers';

const initialstateReducer = (state, action) => {
    if(!state){
        return ({
            questions: [],
            currentQuestion: {},
            testOver: false
        });
    }
    let newState;

    switch(action.type){
        case 'getQuestions':
                newState = {
                    ...state,
                    questions: [...action.questions.results]
                }
            break;
        case 'formatData':
            const formattedQuestions = formatData([...state.questions]);
            newState = {
                ...state,
                questions: formattedQuestions
            };
            break;
        case 'setCurrentQuestion':
            if(!state.testOver){
                const questions = Object.assign([], state.questions);
                const currentQuestionArr = helper.randomizer(questions)//obj will be removed at random from array and stored as the current question in state 
                const [currentQuestionObj] = currentQuestionArr;
                newState = {
                    ...state,
                    questions: questions,
                    currentQuestion: currentQuestionObj
                }
            } else {
                newState = {
                    ...state
                }
            }
            break;
        case 'quizOverTest':
                if(state.questions.length){
                    newState = {...state}
                } else {
                    newState = {
                        ...state,
                        testOver: true
                    }
                }
            break;
        case 'prepareForRetake': 
                newState = {
                    questions: [...action.questions],
                    currentQuestion: {},
                    testOver: false
                }
            break;
        default: 
            newState = {
                ...state
            }
    }

    return newState;
}

export default initialstateReducer
