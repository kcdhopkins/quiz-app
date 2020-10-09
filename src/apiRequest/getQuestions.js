import axios from 'axios';

const getQuestion = dispatch => {
    axios.get('http://localhost:4000/api/questions')
        .then( res => {
            dispatch({type: 'getQuestions', questions: res.data});
            dispatch({type: 'formatData'});
            dispatch({type: 'setCurrentQuestion'});
        });
};

export default getQuestion;