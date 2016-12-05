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
  render () {
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
    console.log('Props received ', this.props)
    const { searchUser, fetchData, state } = this.props
    routeId = route.id
    if (routeId === 'SearchBar') {
      return (
        <SearchBar state={state} searchUser={searchUser} navigator={navigator} />
      )
    }
    if (routeId === 'Profile') {
      return (
        <Profile state={state} fetchData={fetchData} navigator={navigator} />
      )
    }
    if (routeId === 'Progress') {
      return (
        <Progress state={state} searchUser={searchUser} navigator={navigator} />
      )
    }
    if (routeId === 'WebView') {
      return (
        <Webview state={state} searchUser={searchUser} navigator={navigator} {...route.passProps} />
      )
    }
  }
}
Git.propTypes = {
  searchUser: React.PropTypes.func.isRequired,
  fetchData: React.PropTypes.func.isRequired,
  state: React.PropTypes.any.isRequired
}


export default connect(
  (state) => ({
    state: state.default.userdata
  }),
  (dispatch) => ({
    searchUser: (user) => dispatch(actions.searchUser(user)),
    fetchData: () => dispatch(actions.fetchData())
  })
)(Git)

