import getQuestions from '../apiRequest/getQuestions';

const mapDispatch = dispatch => {
    return{
        getQuestions: () => getQuestions(dispatch)
    }
}

export const mapQuestions = obj => {
    obj.dispatch({type: obj.type, selections: obj.selections, question: obj.question});
    obj.dispatch({type: 'quizOverTest'});
    obj.dispatch({type: 'setCurrentQuestion'});
}

export const mapTextQuestion = obj => {
    obj.dispatch({type: 'setTextCorrectness', selections: obj.selections, question: obj.question});
    obj.dispatch({type: 'quizOverTest'});
    obj.dispatch({type: 'setCurrentQuestion'});
}

export const mapReTake = (dispatch, questions) => {
    dispatch({type: 'prepareForRetake', questions: questions});
    dispatch({type: 'resetQuestions'});
    dispatch({type: 'setCurrentQuestion'});
}

export default mapDispatch;