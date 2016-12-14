import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import List from './list'

var projects = {}
const window = Dimensions.get('window')
class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.userData) this.setState({
        isLoading: false
      })
  }

  render () {
    const {userData, navigator } = this.props

    if (this.state.isLoading === true) {
      return (
        <ActivityIndicator animating={this.state.isLoading} style={[styles.container, {height: 80}]} size='large' />
      )
    }else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            User Id is
            {userData.login}
          </Text>
          <Text style={styles.text}>
            User name is
            {userData.name}
          </Text>
          <Text style={styles.text}>
            User location is
            {userData.location}
          </Text>
          <List projects={userData.projects} url={userData.html_url} navigator={navigator} />
        </View>
      )
    }
  }

}
const styles = StyleSheet.create({
  searchBar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 30,
    width: 150,
    borderRadius: 5,
    borderColor: '#bbb',
    paddingLeft: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    color: '#444',
    height: 35,
    fontSize: 20
  }
})

export default Profile
