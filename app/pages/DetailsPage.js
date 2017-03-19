import React, { Component, PropTypes } from 'react'
import { Image, ScrollView, View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default class DetailsPage extends Component {

  render() {
    return (
      <View>
        <Icon.ToolbarAndroid
          titleColor= '#fff'
          navIconName= 'md-paper-plane'
          style = { styles.toolbar }
          overflowIconName = "md-more" >
          <Text style={styles.toolbarTitle} numberOfLines={1}>
            TTTIIITTTLLLEEE
          </Text>
        </Icon.ToolbarAndroid >

        <ScrollView style={styles.container}>
          <Text style={styles.title}>
            Details
          </Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu elit, consequat non justo sed, feugiat lobortis magna. Duis rutrum lectus turpis, vitae bibendum sem euismod at. Vivamus eget sem a velit auctor tempus vel ac nunc. Nunc aliquam augue vel ultricies lacinia. Nam ornare diam quis massa placerat, et blandit ex maximus. Donec nec mauris eu eros consectetur sollicitudin. Vivamus eget risus in justo hendrerit posuere. Ut semper dolor sed mauris porta vulputate.
          </Text>
          <Image
            style={styles.image}
            source={require('../assets/sakura.png')}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  },
  toolbar: {
    height: 56,
    backgroundColor: 'steelblue',
    elevation: 2
  },
  toolbarTitle: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 10
  },
  title: {
    color: 'dimgrey',
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  body: {
    color: 'dimgrey',
    paddingTop: 15
  },
  image: {
    flex: 1,
    marginTop: 15,
    marginBottom: 5,
    width: 250,
    borderRadius: 5,
    alignSelf: 'center'
  }


})



