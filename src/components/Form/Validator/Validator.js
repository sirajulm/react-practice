import React, { Component } from 'react';

const textPattern = /^[a-zA-Z]*$/;
class Validator extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // componentDidMount() {
    // }
    componentWillReceiveProps(nextProps) {
        if(this.props.value !== nextProps.value) {
            if(this.props.type === 'text') {
                this.props.onValidate(textPattern.test(nextProps.value))
            }
        }
    }
    
    render() {
        return null
    }
}

export default Validator