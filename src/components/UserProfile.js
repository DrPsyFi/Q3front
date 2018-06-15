import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { connect } from 'react-redux'
import {displayLyrics} from '../actions/auth.actions'
import LyricsList from "./LyricsList"

const UserProfile = (props) => {

  console.log(props)
  return (
    <div>
      <Container>
        <Row>

          <div className="headline">{`${props.user.userName}'s Profile Page`}</div>

        </Row>
      </Container>

        <Container>
          <Row style={{marginTop: 20}}>


            <img src={props.user.image} alt="profile" />

            <h2>This is me!!: {props.user.bio}</h2>

          </Row>
          <Row>
            <LyricsList />
          </Row>
        </Container>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(UserProfile)
