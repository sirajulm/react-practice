import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {menuItemStyle} from './menuStyle';
const MenuItem = ({path, title, className, action}) => {
    return <li className={className}>
        {
            path && <Link to={path} >{title}</Link>
        }
        {
            action && <button onClick={action} >{title}</button>
        }
    </li>
}
const StyledMenuItem = styled(MenuItem)`
    ${menuItemStyle}
`;
export default StyledMenuItem;