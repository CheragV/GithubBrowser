import React, { Component } from 'react'
import { TextInput, Navigator, Text, View, TouchableOpacity } from 'react-native'
import SearchBar from './searchBar'
import Progress from './progress'
import Profile from './profile.js'
import Webview from './webview'
import * as actions from './actions'
import { connect } from 'react-redux'

var routeId
class Git extends Component {
  constructor (props) {
    super(props)
  }
  componentWillReceiveProps () {
    console.log("Props received ", this.props)
  }

  render () {
    // if (this.props.isLoaded && this.props.userData) {
    //   navigator.replace({
    //     id: 'Profile'
    //   })
    // }
    console.log('Props received are = ', this.props)
    return (
      <Navigator
        renderScene={(route, navigator) => this.renderScene(route, navigator)}
        initialRoute={{ id: 'SearchBar', name: 'Search', myWord: '' }}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
      />
      ) }
  renderScene (route, navigator) {
    const { searchUser, userData } = this.props
    routeId = route.id
    if (routeId === 'SearchBar') {
      return (
        <SearchBar userData={userData} searchUser={searchUser} navigator={navigator} />
      )
    }
    if (routeId === 'Profile') {
      return (
        <Profile userData={userData} navigator={navigator} />
      )
    }
    if (routeId === 'Progress') {
      return (
        <Progress userData={userData} navigator={navigator} />
      )
    }
    if (routeId === 'WebView') {
      return (
        <Webview state={userData} searchUser={searchUser} navigator={navigator} {...route.passProps} />
      )
    }
  }
}
Git.propTypes = {
  searchUser: React.PropTypes.func.isRequired,
  isLoaded: React.PropTypes.any.isRequired,
  userData: React.PropTypes.any.isRequired
}


export default connect(
  (state) => ({
    userData: state.userData,
    isLoaded: state.isLoaded
  }),
  (dispatch) => ({
    searchUser: (user) => dispatch(actions.searchUser(user))
  })
)(Git)

