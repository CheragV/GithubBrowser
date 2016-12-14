import React, { Component } from 'react'
import { TextInput, StyleSheet, ActivityIndicator, Navigator, Text, View, TouchableOpacity, AlertIOS } from 'react-native'
import Profile from './profile.js'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render () {
    console.log('Props received', this.props)
    if (this.props.userData) {
      return (
        <Profile userData={this.props.userData} navigator={this.props.navigator} />
      )
    }
    return (
      <Navigator renderScene={this.renderScene.bind(this)} navigator={this.props.navigator} />
    )
  }

  goToProfile () {
    console.log(this.props)
    this.props.navigator.push({
      id: 'Profile'
    })
    this.props.searchUser(this.state.name)
    
    // setTimeout(() => this.props.navigator.pop(), 5000)
  }

  renderScene (route, navigator) {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TextInput
            autoCorrect={false}
            onChangeText={(word) => this.setState({ name: word })}
            autoFocus={true}
            style={styles.searchBar} />
          <TouchableOpacity onPress={this.goToProfile.bind(this)}>
            <Text ref='userName'>
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

SearchBar.propTypes = {
  searchUser: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.any.isRequired,
  userData: React.PropTypes.any.isRequired
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
    alignItems: 'center'
  }
})

export { SearchBar }
