import React, { Component } from 'react'
import { TextInput, ListView, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Row from './row'

class List extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(this.props.projects)
    }
  }
  handlePress (name) {
    const { url, navigator } = this.props
    console.log(url, navigator, name)
  }
  render () {
      const { url, navigator } = this.props
    console.log('In List View', this.props.projects)
    return (
      <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Row 
          data={rowData}
          url={url} 
          navigator={navigator} />} />
    )
  }
}


export default List
