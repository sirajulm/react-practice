import React from 'react';
import styled from 'styled-components';

import {menuListStyle} from './menuStyle';
const MenuList = (props) => {
    return <ul className={props.className}>
        {props.children}
    </ul>
}

const StyledMenuList =styled(MenuList)`
    ${menuListStyle}
`;

export default StyledMenuList;