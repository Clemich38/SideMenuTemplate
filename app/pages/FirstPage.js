import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class FirstPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          First Page
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



