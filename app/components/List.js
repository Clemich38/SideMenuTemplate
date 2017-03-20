import React, { Component, PropTypes } from 'react'
import { View, Text, ListView, StyleSheet, TouchableOpacity } from 'react-native'

// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

// DataSource template object
const ds = new ListView.DataSource({ rowHasChanged })

export default class List extends Component {

  state = {
    dataSource: ds.cloneWithRows(this.props.list)
  }

  renderItem = (rowData, sectionID, rowID) => {
    const { onGotoDetails } = this.props
    return (
      <TouchableOpacity style={styles.item} 
                        onPress={() => onGotoDetails(rowID)}>
        <Text style={styles.itemtext} >{rowData.label} - {rowID}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { list } = this.props
    return (
      <ListView style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderItem} />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: '#eaeaea',
  },
  itemtext: {
    color: 'lightslategrey',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

})



