import React, { Component } from 'react'
import { TextInput, Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import List from './list'

var projects = {}
const window = Dimensions.get('window');
class Profile extends Component {
  componentWillReceiveProps () {
    console.log(' New props received ')
  }

  render () {
    const { state, navigator } = this.props
    console.log(state, state.userId)
    // fetch(state.repositories).then((res) => res.json()).then((data) => {
    //   console.log(data)
    //   for (var i = 0; i < data.length; i++) {
    //     data[i] = data[i].name
    //   }
    //   projects = data
    // })
    console.log(state) 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          User Id is {state.userId}
        </Text >
        <Text style={styles.text}>
          User name is {state.name}
        </Text >
        <Text style={styles.text}>
          User location is {state.location}
        </Text>
        <List projects={state.projects} url={state.url} navigator={navigator} />

      </View>
    )
    console.log(state, state.userId)
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
