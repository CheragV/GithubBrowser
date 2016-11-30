import React, { Component } from 'react'
import { TextInput, StyleSheet, Navigator, Text, View, TouchableOpacity, AlertIOS } from 'react-native'

var data = {}
export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  render () {
    return (
      <Navigator renderScene={this.renderScene.bind(this)} navigator={this.props.navigator} />
    )
  }

  goToProfile () {
    this.props.searchUser(this.state.name)
    console.log(this.props)
    if (this.state.name.length > 0) {
      this.props.navigator.push({
        id: 'Profile',
        passProps: { myWord: this.state.name }
      })
    }
    else {
      AlertIOS.alert(
       'Text Missing'
       )
    }
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
  navigator: React.PropTypes.any.isRequired
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
