import React, {Component, Fragment} from 'react';

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            valid: true
        }

        this.handleInput = this.handleInput.bind(this)
        this.onValidate = this.onValidate.bind(this)
    }
    handleInput(event) {
        this.setState({
            value: event.target.value
        })
    }
    onValidate(result) {
        this.setState({
            valid: result
        })
    }
    render() {
        const errorStyle = this.state.valid === false ? {borderColor: 'red'}: null;
        return <Fragment>
            <input style = {errorStyle }type="text" value={this.state.value} onChange={this.handleInput} />
            {
                this.props.render && 
                this.props.render('text', this.state.value, this.onValidate)
            }
        </Fragment>
    }
}

export default InputText;