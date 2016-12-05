import React, { Component } from 'react'
import { TextInput, StyleSheet, Navigator, Text, View, TouchableOpacity, AlertIOS } from 'react-native'
import { Loading } from './loading'

var data = {}
export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      animation: false
    }
  }

  render () {
    console.log("Props received")
    return (
      <Navigator renderScene={this.renderScene.bind(this)} navigator={this.props.navigator} />
    )
  }

  // componentWillUpdate() { 
  //   console.log(" CWU called")
  //   const { state, navigator } = this.props
  //   console.log(state)
  //   if (state.userId.length > 0) {
  //     navigator.push({
  //       id: 'Profile' 
  //     })
  //   } else {
  //     AlertIOS.alert(
  //       'Text Missing'
  //     )
  //   }
  // }

  goToProfile () {
    this.props.searchUser(this.state.name)
    const { state, navigator } = this.props
    console.log(state, this.props, state.userId)
    setTimeout(() => {
      console.log(state.userId)
      if (state.userId) {
        console.log('Popped')
        navigator.replace({
          id: 'Profile'
        })
      } else {
        AlertIOS.alert(
          'User Not Found'
        )
        navigator.pop()
      }
    }, 5000)

    navigator.push({
      id: 'Progress'
    })
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
  state: React.PropTypes.any.isRequired
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
