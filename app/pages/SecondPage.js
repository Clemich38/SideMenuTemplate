import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class SecondPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Second Page
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


})



