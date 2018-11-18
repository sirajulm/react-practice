import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


import AuthenticatedRoute from '../../components/AuthenticatedRoute';
import Home from '../../screens/Home';
import About from '../../screens/About';
import Questions from '../../screens/Questions';
import Login from '../../screens/Login';

const token = localStorage.getItem('token');
const Main = (props) => {
    return <main>
        <Switch>
            <AuthenticatedRoute exact authenticated={props.token !== null} path='/' component={Home}/>
            <AuthenticatedRoute authenticated={props.token !== null} path='/about' component={About} />
            <AuthenticatedRoute authenticated={props.token !== null} path='/questions' component={Questions}/>
            <Route path='/login' component={Login}/>
            <Redirect to='/login' />
        </Switch>
    </main>
}

const mapStateToProps = ({api, auth}) => ({...auth})
export default  withRouter(connect(mapStateToProps)(Main));