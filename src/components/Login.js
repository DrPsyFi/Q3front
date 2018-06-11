import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserData } from '../actions/auth.actions'
import { Link } from 'react-router-dom'
import request from "../helpers"

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: '',
      password: '',
      showErrorMessage: false
    }
  }
    handleSubmit = (e) => {
      e.preventDefault()
      let userName = e.target.userName.value
      let password = e.target.password.value

      console.log(userName, password);

    request('/auth/token','post', { userName, password })
    .then(response => {
      this.setState({ showErrorMessage: false })
      localStorage.setItem('token', response.data.token)
      return request('/auth/token')
    })
    .then(response => {
      console.log('respomse is', response.data)
      return request(`/users/${response.data.id}`)
      // AuthenticationService.setAuthState(response.data)
      // this.props.history.push('/')
    })
    .then(response => {
      console.log('user data?', response.data.data);
      this.props.setUserData(response.data.data);
    })
    .catch(error => {
      console.log(error)
      this.setState({showErrorMessage: true})
    })
  }


  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '15vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="userName-field">User Name</Label>
                <Input
                  type="userName"
                  name="userName"
                  id="userName-field"
                  placeholder="user name"
                  value={this.state.userName}
                  onChange={e => this.setState({userName: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password-field">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="pass-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e => this.setState({password: e.target.value})}
                />
              </FormGroup>
              {this.props.showLoginError ? (
                <Alert color="primary">
                  Either your email or password is incorrect. Please try again.
                </Alert>
              ) : null}
              <Button className="mr-3" type="submit" color="primary">
                Submit
              </Button>
              <Link to="/signup">Not a member?</Link>

            </Form>
          </Col>
        </Row>
      </Container>
    )
  }

}

function mapStateToProps(state) {
  return {
    showLoginError: state.auth.showLoginError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUserData: bindActionCreators(setUserData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
