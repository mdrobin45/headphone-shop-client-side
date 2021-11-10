import React from 'react';
import { Redirect, Route } from 'react-router';
import useAPI from '../../Hooks/useAPI';

const PrivetRoute = ({ children, ...rest }) =>
{
    const { user,isLoggedIn } = useAPI().auth;
    if (isLoggedIn) {
        return children;
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: '/login',
                    state: {from:location}
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;