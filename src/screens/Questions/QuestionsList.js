import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { callApi } from '../../actions/apiActions';
import { questionsFetchedSuccess, questionsFetchedFailure} from '../../actions/questionsActions';

class QuestionsList extends Component {
    componentDidMount() {
        const payload = {
            method: 'GET',
            endpoint: '/questions',
            actions: {
                success: questionsFetchedSuccess,
                failure: questionsFetchedFailure
            }
        };
        this.props.dispatch(callApi(payload));
    }
    render(){
        const {questions, error} = this.props;
        return <div>
            {
                questions.length &&
                <ul>
                    {
                        questions.map((question) => {
                            return  <li key={question.id}><Link to={{
                                pathname: `/questions/${question.id}`,
                                state: {questionId: question.id}
                            }} >{question.question}</Link></li>
                        })
                    }
                </ul>
            }
            
        </div>
    }
} 

const mapStateToProps = ({questions}) => ({...questions})

export default connect(mapStateToProps)(QuestionsList);