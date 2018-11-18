import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import AvatarContext from '../../contexts/AvatarContext';
import User from '../User';
import {MenuList, MenuItem } from '../../components/Menu';
import {logoutUser} from '../../actions/loginActions';

const StyledNavBar = styled.nav`
    display: flex;
    height: 64px;
    overflow: hidden;
    justify-content:space-evenly;
    background-color: #dc8989;
    `;

const Navbar = (props) => {
        const authenticated = props.token !== null;
        return <StyledNavBar>
            <MenuList>
                <MenuItem path="/" title="Home"/>
                <MenuItem path="/about" title="About"/>
                <MenuItem path="/questions" title="Questions"/>
                {
                    authenticated ? <MenuItem action={() => {props.dispatch(logoutUser(props.history, '/'))}} title="Logout" primary/> : <MenuItem path="/login" title="Login" primary/>
                }
            </MenuList>
            <AvatarContext.Provider value={props.avatar}>
                <User/>
            </AvatarContext.Provider>
        </StyledNavBar>
}

const mapStateToProps = ({auth}) => ({...auth})

export default connect(mapStateToProps)(Navbar);