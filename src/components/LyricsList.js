import React, {Component}  from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



/////when user is verified and logged in show all of my lyrics

export class lyricsList extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.displayLyrics(this.props)


  }
  render() {
    return (<ul>

      {this.props.songs.map(ele => <li key={ele.id}>{ele.songName}</li>)}
    </ul>)
  }
}


const mapStateToProps = state => {
  return {
    songs: state.auth.songs
  }
 }

 function mapDispatchToProps(dispatch) {
   return {
     displayLyrics: bindActionCreators(displayLyrics, dispatch)
   }
 }




export default connect(mapStateToProps,mapDispatchToProps)(lyricsList)
