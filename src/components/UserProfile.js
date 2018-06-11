import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { connect } from 'react-redux'

const UserProfile = (props) => {
  console.log('up props', props)
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
