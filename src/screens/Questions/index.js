import React from 'react';
import {Switch, Route} from 'react-router-dom';

import QuestionsList from './QuestionsList';
import Question from './Question';

const Questions = (props) => {
    return <Switch>
    <Route exact path='/questions' component={QuestionsList}/>
    <Route path='/questions/:questionId' component={Question} />
</Switch>
    
};

export default Questions;