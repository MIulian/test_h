import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './utils/history';

import Context from './utils/context';
import AuthCheck from './utils/authcheck';

import Home from './hooks/home';
import Header from './hooks/header';
import Callback from './hooks/callback';
import SignUp from './hooks/signup';


import Profile from './Profile/profile';
import ShowUser from './Profile/showuser';

const PrivateRoute = ({component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/signup'}} />
  }
  />
)



const Routes = () => {
    const context = useContext(Context)

      return(
        <div>
          <Router history={history} >
          <Header />
          <br />
          <br />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />

              <Route path='/authcheck' component={AuthCheck} />
              <Route path='/signup' component={SignUp} />

              <Route path="/user/:name" component={ ShowUser } />

              <PrivateRoute path='/profile'
                            auth={context.authState}
                            component={Profile} />
              <PrivateRoute path="/profile"
                            auth={context.authState}
                            component={Profile} />
              <Route path='/callback'
                     render={(props) => { context.handleAuth(props);
                                           return <Callback />}} />


            </Switch>
          </div>
          </Router>
        </div>
  )}



export default Routes;
