import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'


export default class HomePage extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Home Page
        </Text>
        <Text style={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu elit, consequat non justo sed, feugiat lobortis magna. Duis rutrum lectus turpis, vitae bibendum sem euismod at. Vivamus eget sem a velit auctor tempus vel ac nunc. Nunc aliquam augue vel ultricies lacinia. Nam ornare diam quis massa placerat, et blandit ex maximus. Donec nec mauris eu eros consectetur sollicitudin. Vivamus eget risus in justo hendrerit posuere. Ut semper dolor sed mauris porta vulputate.
        </Text>
        <Text style={styles.body}>
          Morbi in libero body. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus ac aliquet massa. Mauris porttitor varius viverra. Duis posuere dolor et enim ultrices, ut bibendum purus maximus. Mauris feugiat varius erat sit amet maximus. Praesent fermentum nunc at urna posuere egestas. Fusce at leo eu diam feugiat tempus. Nam sollicitudin, magna quis facilisis rutrum, nibh lacus molestie mauris, id ornare eros lorem eu neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </Text>
        <Text style={styles.body}>
          Integer in turpis in dui hendrerit viverra. Mauris faucibus tellus placerat efficitur fringilla. Mauris ipsum libero, accumsan ut est vitae, volutpat euismod dui. Nulla facilisi. In in turpis non erat viverra bibendum. Vivamus eleifend tortor et tempus imperdiet. Sed consequat condimentum blandit. Nunc tincidunt finibus blandit. Suspendisse id ullamcorper magna, a aliquet ligula.
        </Text>
        <Text style={styles.body}>
          Sed tristique gravida neque ac consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu ligula, ornare in fringilla nec, pharetra ac erat. Vivamus et erat sit amet mauris laoreet tincidunt at ut nisl. Aliquam pulvinar, odio a rhoncus rutrum, ipsum metus ornare nulla, a molestie enim diam nec urna. Nulla sollicitudin, nibh vitae fermentum tempus, neque libero sagittis felis, eget viverra dolor lectus et ex. Mauris sit amet nisi lacinia, efficitur sem vitae, finibus quam. Aliquam in ante eu odio pretium pretium eget et erat. Phasellus nisi massa, placerat sit amet commodo eu, volutpat vel lectus. Etiam augue nisl, fringilla a euismod et, lacinia id nisi. Proin nec scelerisque turpis.
        </Text>
        <Text style={styles.body}>
          In at eros mauris. Nulla aliquet bibendum sem. In ac ante ut nibh sagittis dictum eu sit amet odio. Ut eleifend id urna ullamcorper finibus. Sed enim lorem, porttitor et diam et, mollis suscipit leo. Cras quis lacinia purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat tincidunt laoreet. Ut volutpat, sem ac eleifend dapibus, magna urna laoreet nibh, eget faucibus lorem eros nec urna. Duis sed tortor nec ligula condimentum semper.
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
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
  }


})



