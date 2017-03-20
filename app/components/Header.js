import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {

  render() {
    const { children } = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          {children}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: 'lightsteelblue',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})