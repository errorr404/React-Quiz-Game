import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import StartPage from './component/StartPage';
import Question from './component/Question';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" component = {StartPage} exact/>
      <Route path="/quiz" component = { Question} />
    </Switch>
    </div>
  );
}

export default App;

