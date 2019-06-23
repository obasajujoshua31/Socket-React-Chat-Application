import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import authenticate from '../utils/authenticate/auth'


const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (authenticate.auth() === true ) ? (
            <Component {...props} />
        ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            from: props.location
                        }
                    }}
                />
            )
        }
    />
);


export default ProtectedRoute
