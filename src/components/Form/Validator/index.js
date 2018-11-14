import React, {Component} from 'react';

import Validator from './Validator';

export const withValidator = (Component) => {
    return class extends Component {
        render() {
            return <Component render={ (type, value, onValidate) => (
                <Validator 
                    type={type} 
                    value={value} 
                    onValidate={onValidate} 
                    />
                )} 
            />
        }
    }
}
