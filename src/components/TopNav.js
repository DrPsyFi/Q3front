import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout} from '../actions/auth.actions'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class TopNav extends React.Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="secondary"  expand="md">
          <NavbarBrand href="/">ProfileHub</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                this.props.isLoggedIn ? (
                    <NavItem>
                      <NavLink tag={Link} onClick={()=> this.props.userLogout()} to={`/login`}>Log Out</NavLink>
                    </NavItem>


                ) : (
                  <div>
                  <NavItem>
                    <NavLink tag={Link} to={`/login`}>Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={`/signup`}>Signup</NavLink>
                  </NavItem>
                  </div>
                )
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

///use history push

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
