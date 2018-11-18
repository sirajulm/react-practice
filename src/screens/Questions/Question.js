import React, {Component} from 'react';
import {connect} from 'react-redux';
import { callApi } from '../../actions/apiActions';
import { answersFetchedSuccess, answersFetchedFailure} from '../../actions/questionsActions';
class Question extends Component {
    componentDidMount() {
        console.log(this.props.location.state)
        const payload = {
            method: 'GET',
            endpoint: `/questions/${this.props.location.state.questionId}`,
            actions: {
                success: answersFetchedSuccess,
                failure: answersFetchedFailure
            }
        };
        this.props.dispatch(callApi(payload));
    }
    render(){
        const {question, answers} = this.props;
        return <div>
            <div>{question.length && question[0].question}</div>
            <div>
                {answers.length &&
                <ul>
                    {answers.map((answer, index) => {
                        return <li key={index}>{answer}</li>
                    })}
                </ul>
                }
            </div>
        </div>
    }
} 

const mapStateToProps = ({answers}) => ({...answers})

export default connect(mapStateToProps)(Question);