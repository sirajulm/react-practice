import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding-bottom: 10px;
`;

const FieldWrapper = ({children}) => {
    return <StyledWrapper>
        {children}
    </StyledWrapper>
}

export {FieldWrapper};