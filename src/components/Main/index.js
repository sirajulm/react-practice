import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import AuthenticatedRoute from '../../components/AuthenticatedRoute';
import Home from '../../screens/Home';
import About from '../../screens/About';
import Questions from '../../screens/Questions';
import Login from '../../screens/Login';

const StyledMain = styled.main`
    padding-top: 15px;
    `;

const Main = (props) => {
    return <StyledMain>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <AuthenticatedRoute authenticated={props.token !== null} path='/questions' component={Questions}/>
            <Route path='/login' component={Login}/>
            <Redirect to='/login' />
        </Switch>
    </StyledMain>
}

const mapStateToProps = ({api, auth}) => ({...auth})
export default  withRouter(connect(mapStateToProps)(Main));