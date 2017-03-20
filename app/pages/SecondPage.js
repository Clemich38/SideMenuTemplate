import React, { Component, PropTypes } from 'react'
import { Image, ScrollView, View, Text, StyleSheet } from 'react-native'


export default class SecondPage extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/shira.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/matsu.png')}
        />
        <Image
          style={styles.image}
          source={require('../assets/sakura.png')}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    height: 200,
    borderRadius: 5,
    alignSelf: 'center'
  }


})



