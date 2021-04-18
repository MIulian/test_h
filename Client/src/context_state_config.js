import React, { useReducer } from 'react';
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions';

import * as Reducer1 from './store/reducers/plain_reducer';
import * as AuthReducer from './store/reducers/auth_reducer';


import Routes from './routes';
import Auth from './utils/auth';

const auth = new Auth()

const ContextState = (props) => {
    /*
        Plain Reducer
    */
    const [stateReducer1, dispatchReducer1] = useReducer(Reducer1.Reducer1,
                                                         Reducer1.initialState)


    const handleDispatchTrue = () => {
      //    dispatchReducer1(type: "SUCCESS")
      //    dispatchReducer1(ACTIONS.SUCCESS)
      dispatchReducer1(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
      //     dispatchReducer1(type: "FAILURE")
      //    dispatchReducer1(ACTIONS.FAILURE)
      dispatchReducer1(ACTIONS.failure())
     }

    /*
      Auth Reducer
    */
    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer,
                                                               AuthReducer.initialState)


    const handleLogin = () => {
      dispatchAuthReducer(ACTIONS.login_success())
    }

    const handleLogout = () => {
      dispatchAuthReducer(ACTIONS.login_failure())
    }


    const handleDBProfile = (profile) => {
      dispatchAuthReducer(ACTIONS.set_db_profile(profile))
    }

    const handleRemoveDBProfile = () => {
      dispatchAuthReducer(ACTIONS.remove_db_profile())
    }

    const handleAddProfile = (profile) => {
      dispatchAuthReducer(ACTIONS.add_profile(profile))
    }

    const handleRemoveProfile = () => {
      dispatchAuthReducer(ACTIONS.remove_profile())
    }

    //Handle authentication from callback
    const handleAuthentication = (props) => {
      if(props.location.hash) {
        auth.handleAuth()
      }
    }

    return(
      <div>
      <Context.Provider
          value={{
            stateProp1: stateReducer1.stateprop1,
            dispatchContextTrue: () => handleDispatchTrue(),
            dispatchContextFalse: () => handleDispatchFalse(),
            authState: stateAuthReducer.is_authenticated,
            dbProfileState: stateAuthReducer.db_profile,
            profileState:  stateAuthReducer.profile,

            handleAddDBProfile: (profile) => handleDBProfile(profile),
            handleRemoveDBProfile: () => handleRemoveDBProfile(),
            handleUserAddProfile: (profile) => handleAddProfile(profile),
            handleUserRemoveProfile: () => handleRemoveProfile(),
            handleUserLogin: () => handleLogin(),
            handleUserLogout: () => handleLogout(),


            handleAuth: (props) => handleAuthentication(props),
            authObj: auth
          }}>
          <Routes />
      </Context.Provider>
      </div>
    )
}


export default ContextState;
