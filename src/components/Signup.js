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
import { userSignup } from '../actions/auth.actions'

export class Signup extends Component {
  state = {
    isValid: true,
    passwordClasses: 'form-control',
    fName: '',
    lName: '',
    userName: '',
    bio: '',
    image: '',
    password: '',
    verify_password: ''
  }
  userSignup = e => {
    e.preventDefault()
    let { fName, lName, userName, bio, image, password, verify_password } = this.state
    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-invalid',
        isValid: false
      })
    } else {
      let newUser = {fName, lName, userName, bio, image, password}
      console.log('newUser', newUser)
      this.props.userSignup(newUser)
    }
  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form onSubmit={this.userSignup}>
              <FormGroup>
                <Label for="fName">First Name</Label>
                <Input
                  type="text"
                  name="fName"
                  id="fName-field"
                  placeholder="first name"
                  value={this.state.fName}
                  onChange={e =>
                    this.setState({ fName: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="lName">Last Name</Label>
                <Input
                  type="text"
                  name="lName"
                  id="lName-field"
                  placeholder="last name"
                  value={this.state.lName}
                  onChange={e =>
                    this.setState({ lName: e.target.value })
                  }
                />
              </FormGroup>
               <FormGroup>
                 <Label for="userName">User Name</Label>
                 <Input
                   type="text"
                   name="userName"
                   id="userName-field"
                   placeholder="user name"
                   value={this.state.userName}
                   onChange={e =>
                     this.setState({ userName: e.target.value })
                   }
                 />
              </FormGroup>
              <FormGroup>
                <Label for="bio">Bio</Label>
                <Input
                  type="text"
                  name="bio"
                  id="phone-field"
                  placeholder="tell us something about you!"
                  value={this.state.bio}
                  onChange={e =>
                    this.setState({bio: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">URL Image address</Label>
                <Input
                  type="text"
                  name="userImage"
                  id="userImage-field"
                  placeholder="url image address"
                  value={this.state.image}
                  onChange={e =>
                    this.setState({ image: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e =>
                    this.setState({ password: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="verify_password">Verify Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="verify_password"
                  placeholder="password"
                  value={this.state.verify_password}
                  onChange={e =>
                    this.setState({ verify_password: e.target.value })
                  }
                />
                {!this.state.isValid ? (
                  <Alert color="danger">Passwords do not match</Alert>
                ) : null}
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Signup)
