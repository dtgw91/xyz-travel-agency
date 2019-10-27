import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import MainPage from './MainPage'
import View from './View'
import NewApplication from './NewApplication'
import { UserConsumer } from './UserContext'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <UserConsumer>
    { ({user}) => (
        <main>
            <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/main' render={(props) => <AuthPage {...props} user={user} comp=<MainPage /> />} />
            <Route exact path='/view' render={(props) => <AuthPage {...props} user={user} comp=<View /> />} />
            <Route exact path='/new' render={(props) => <AuthPage {...props} user={user} comp=<NewApplication /> />} />
            </Switch>
        </main> )
    }
  </UserConsumer>
)

const AuthPage = ({ user, comp }) => {
  if (localStorage.getItem('userName') != '') {
    return comp;
  } else {
    return <Redirect to="/" />;
  }
};

export default Main
