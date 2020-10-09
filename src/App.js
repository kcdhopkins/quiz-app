import React, { useEffect } from 'react';
import Question from './components/Question';
import AnswerSelections from './components/AnswerSelection';
import './App.scss';
import { connect } from 'react-redux';
import mapState from './reducers/mapState';
import mapDispatch from './reducers/mapDispatch';
import Summary from './components/summary';

const App = props => {

  useEffect(()=>{
    props.getQuestions();
  }, []);

  let component;

  if(props.testOver){
    component = <Summary correctQuestions={props.correctQuestions} incorrectQuestions = {props.incorrectQuestions} unAnsweredQuestions = {props.unAnsweredQuestions}/>;
  }else{
    component = (<>
          <Question question={props.currentQuestion}/>
          <AnswerSelections question={props.currentQuestion}/>
        </>
    )
  }

  return (
    <div className="App">
      <section>
        <div className="questionSection">
          {component}
        </div>
      </section>
    </div>
  );
}

export default connect(mapState, mapDispatch)(App);
