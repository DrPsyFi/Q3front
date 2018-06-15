import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { reloadUser } from './actions/auth.actions'



import Signup from "./components/Signup"
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import TopNav from './components/TopNav'
import './App.css'
import { connect } from 'react-redux'


export class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if(!this.props.isLoggedIn) {
      this.props.reloadUser()
    }

  }

  render() {

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
                this.props.isLoggedIn ? (
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
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    reloadUser: bindActionCreators(reloadUser, dispatch),
  ////setUsERDATA?
  }
}


export default connect(mapStateToProps,  mapDispatchToProps)(App)
