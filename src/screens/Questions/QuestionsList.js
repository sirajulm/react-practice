import React from 'react';
import { Link } from 'react-router-dom';

const QuestionsList = (props) => {
    return <div>
        <ul>
            <li><Link to='/questions/1' >Question 1</Link></li>
            <li><Link to='/questions/2' >Question 2</Link></li>
            <li><Link to='/questions/3' >Question 3</Link></li>
            <li><Link to='/questions/4' >Question 4</Link></li>
        </ul>
    </div>
} 

export default QuestionsList;