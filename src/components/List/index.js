import React from 'react';
export default (props) => {

    return <ul>
    {

        props.data.map((item, index) => {
            return <li key={item.id}>{item.value}</li>
        })
    }
    </ul>
}
