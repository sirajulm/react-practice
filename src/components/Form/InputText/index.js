import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

import {inputStyle} from './inputStyle';


const StyledInput = styled.input`
${inputStyle}`;

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: '',
            valid: true
        }

        this.handleInput = this.handleInput.bind(this)
        this.onValidate = this.onValidate.bind(this)
    }
    handleInput(event) {
        this.props.handleUpdate(event);
        // this.setState({
        //     value: event.target.value
        // })
    }
    onValidate(result) {
        this.setState({
            valid: result
        })
    }
    render() {
        const errorStyle = this.state.valid === false ? {borderColor: 'red'}: null;
        return <Fragment>
            <StyledInput 
                name = {this.props.name}
                type={this.props.type} 
                className={this.props.className} 
                value={this.state.value} 
                style = {errorStyle } 
                onChange={this.handleInput} />
            {
                this.props.render && 
                this.props.render('text', this.props.value, this.onValidate)
            }
        </Fragment>
    }
}



export  {Input};