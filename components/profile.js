import React, { Component } from 'react'
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class Profile extends Component {
    render () {
   const { state } = this.props
        setTimeout(() => {console.log(state, state.userId )}, 5000)
      
         console.log(state, state.userId )
      
      return (
        <View>
          <Text> This is profile </Text>
          <Text>{state.userId}</Text>
          <Text>{state.name}</Text>
          <Text>{state.followers}</Text>
          
        </View>
        )
    }
}

export default Profile
