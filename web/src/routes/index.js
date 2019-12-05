import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Chat from '../pages/Chat';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

export default function Routes(){
    return(
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} isPrivate/>
            <Route path="/chat/:id" exact component={Chat} isPrivate/>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" exact component={SignUp}/>
        </Switch>
    )
}
