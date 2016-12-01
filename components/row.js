import React, { Component } from 'react'
import { TextInput, ListView, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class Row extends Component {
  constructor (props) {
    super(props)
  }
  handlePress () {
    const { data, url, navigator } = this.props
    console.log(data,"  is presssed")
    console.log(`${url}/${data}`)
    navigator.push({
        id: 'WebView',
        passProps: { url: `${url}/${data}` }
    })
  }

  render () {
      console.log("Reached inside Row with ", )
    const { data, url } = this.props
    return (
      <View style={styles.rowView}>
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>
            {data}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowView: { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 45 },
});

export default Row
