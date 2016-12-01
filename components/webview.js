import React, { Component } from 'react'
import { WebView, View, TouchableOpacity, Text } from 'react-native'

class Webview extends Component {
  goBack () {
    this.props.navigator.pop()
  }

  render () {
    return (

        <WebView source={{uri: this.props.url}} style={{marginTop: 20}} />
      

    )
  }
}
export default Webview
