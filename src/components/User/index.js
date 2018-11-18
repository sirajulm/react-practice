import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';

const StyledUser = styled.div`
    height:100%;
    display: flex;
    align-items: center;
    `;
const User = (props) => {
    return <StyledUser>
        <Avatar width={56} height={56}/>
    </StyledUser>
}

export default User;