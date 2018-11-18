import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import {Input} from '../../components/Form/InputText';
import { withValidator } from '../../components/Form/Validator';
import {StyledButton} from '../../components/Form/Button';
import {FieldWrapper} from '../../components/Form/FieldWrapper';
import { loginUser } from '../../actions/loginActions';

const InputWithValidator = withValidator(Input);
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    handleUpdate = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    formSubmit = (event) => {
        this.props.dispatch(loginUser(this.state, this.props.history, '/questions'));
        event.preventDefault();
    }
    render() {
        return <div>
            <div>Login</div>
            <div>
                <form>
                    <FieldWrapper>
                        <InputWithValidator name="username" handleUpdate={this.handleUpdate} value={this.state.username} type="text"/>
                    </FieldWrapper>
                    <FieldWrapper>
                        <InputWithValidator name="password" handleUpdate={this.handleUpdate} value={this.state.password} type="password"/>
                    </FieldWrapper>
                    <FieldWrapper>
                        <StyledButton onClick={this.formSubmit}>Login</StyledButton>
                    </FieldWrapper>
                </form>
            </div>
        </div>
    }
}

const mapStateToProps = ({auth}) => ({ ...auth});

export default connect(mapStateToProps)(Login);

// export default Login;
// export default connect(Login);