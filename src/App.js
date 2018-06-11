import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'




import Signup from "./components/Signup"
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import TopNav from './components/TopNav'
import './App.css'
import { connect } from 'react-redux'


export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div>
        <TopNav />
          <Switch>
            <Route exact path = "/" render ={ () =>
              <Redirect to = '/login'/>  }
            />
            <Route path='/signup' component={Signup} />
            <Route exact path="/login" render={() =>
                props.isLoggedIn ? (
                  <Redirect to="/profile"/>
                ) :
                (
                  <Login/>
                )}
              />
            <Route path='/profile' component={UserProfile} />
          </Switch>
          </div>
        </BrowserRouter>

    </div>
  )
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(App)
