
const mapState = (state, ownProps) => {
    return {
       currentQuestion: state.initialstateReducer.currentQuestion,
       testOver: state.initialstateReducer.testOver,
       incorrectQuestions: state.questionReducer.incorrectQuestions,
       correctQuestions: state.questionReducer.correctQuestions,
       unAnsweredQuestions: state.questionReducer.unAnsweredQuestions
    }
}

export default mapState;