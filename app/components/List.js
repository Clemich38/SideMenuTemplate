import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'


export default class List extends Component {

  renderItem = (item, i) => {
    const { onToggle } = this.props

    return (
      <View style={styles.item} key={i} >
        <Text style={styles.itemtext} >{item.label}{i}</Text>
      </View>
    )
  }

  render() {
    const { list } = this.props
    return (
      <ScrollView style={styles.container}>
        {list.map(this.renderItem)}
      </ScrollView>
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
    padding: 10,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: '#eaf1f9',
  },

  itemtext: {
    color: 'lightslategrey',
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

})



