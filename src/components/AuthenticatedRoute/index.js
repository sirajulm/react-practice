import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const AuthenticatedRoute = ({component: Component, authenticated, ...rest}) => {
    return <Route {...rest} render={(props)=> {
        return authenticated ? <Component {...props} /> : <Redirect to='/login' />;
    }}/>
}

export default AuthenticatedRoute;