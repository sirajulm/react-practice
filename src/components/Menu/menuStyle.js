import {css} from 'styled-components';

const menuListStyle = css`
    list-style:none;
    display:flex;
    justify-content:center;
    `;
const menuItemStyle = css`
    padding: 0 10px;
    background: ${props => props.primary ? 'red': 'none'}
    border-radius: ${props => props.primary ? '5px': 'none'}
    a {
        display: inline-block;
        padding: 5px 15px;
        text-decoration: none;
    }
    button {
        display: inline-block;
        width: 100%;
        height: 100%;
        cursor: pointer;
        padding: 5px 15px;
        background: transparent;
        border:0;
    }
    `;


export {menuListStyle, menuItemStyle}