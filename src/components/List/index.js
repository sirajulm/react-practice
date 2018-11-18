import React from 'react';
import styled from 'styled-components';
const StyledList = styled.ul`
    list-style: none;
    `;

    export default (props) => {

    return <StyledList>
    {

        props.data.map((item, index) => {
            return <li key={item.id}>{item.value}</li>
        })
    }
    </StyledList>
}
