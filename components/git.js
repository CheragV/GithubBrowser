import React, { Component } from 'react'
import { TextInput, Navigator, Text, View, TouchableOpacity } from 'react-native'
import SearchBar from './searchBar'
import Profile from './profile.js'
import * as actions from './actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

var routeId
class Git extends Component {
  constructor (props) {
    super(props)
  }
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
    console.log("Props received ",this.props)
    const { searchUser, fetchData } = this.props
    routeId = route.id
    if (routeId === 'SearchBar') {
      return (
        <SearchBar searchUser={searchUser} navigator={navigator} />
      )
    }
    if (routeId === 'Profile') {
      return (
        <Profile fetchData={fetchData} navigator={navigator} {...route.passProps} />
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
    state: state.reducers
  }),
  (dispatch) => ({
    searchUser: (user) => dispatch(actions.searchUser(user)),
    fetchData: () => dispatch(actions.fetchData())
  })
)(Git)

