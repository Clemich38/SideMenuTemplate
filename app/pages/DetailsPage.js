import React, { Component, PropTypes } from 'react'
import { Image, Navigator, ScrollView, View, Text, StyleSheet, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';

// Redux
import { actionCreators } from '../redux/appRedux'

const mapStateToProps = (state) => ({
  items: state.items,
  currentPageIndex: state.currentPageIndex,
})

class DetailsPage extends Component {

  setCurrentPageIndex = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.setCurrentPage(index));
  }

  navigateBack() {
    this.props.navigator.pop()
    this.setCurrentPageIndex(1)
  }

  handlesBackButton = () => {
    try {
      this.navigateBack(0);
    }
    catch (e) { }

    return true;
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handlesBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handlesBackButton);
  }

  render() {
    return (
      <View>
        <Icon.ToolbarAndroid
          titleColor= '#fff'
          navIconName='md-arrow-back'
          onIconClicked={this.navigateBack.bind(this)}
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

export default connect(mapStateToProps)(DetailsPage)


