import React, { Component } from 'react';

import Validator from './Validator';

export const withValidator = (Comp) => {
    return class extends Component {
        render() {
            return <Comp {...this.props} render={ (type, value, onValidate) => (
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

// export const withValidator = (Comp) => {
//     return class extends Component {
//         render() {
//             return <Comp render={ (type, value, onValidate) => (
//                 <Validator 
//                     type={type} 
//                     value={value} 
//                     onValidate={onValidate} 
//                     />
//                 )} 
//             />
//         }
//     }
// }
