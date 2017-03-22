import React, { Component, PropTypes } from 'react'
import { Image, Navigator, ScrollView, View, Text, StyleSheet, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  items: state.items,
  currentPageIndex: state.currentPageIndex,
  itemClicked: state.itemClicked,
})

class DetailsPage extends Component {

  setCurrentPageIndex = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.setCurrentPage(index));
  }

  // Navigate back to List page
  navigateBack() {
    this.props.navigator.pop()
    this.setCurrentPageIndex(1)
  }

  // Handel hardware back button
  handlesBackButton = () => {
    try {
      this.navigateBack();
    }
    catch (e) { }
    return true;
  }

  // Add Hardware back button listener
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handlesBackButton);
  }

  // Remove Hardware back button listener
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handlesBackButton);
  }

  render() {
    const { itemClicked } = this.props
    return (
      <View style={styles.mainContainer}>

        {/* ToolBar */}
        <Icon.ToolbarAndroid
          titleColor= '#fff'
          navIconName='md-arrow-back'
          onIconClicked={this.navigateBack.bind(this)}
          style = { styles.toolbar }
          overflowIconName = "md-more" >
          <Text style={styles.toolbarTitle} numberOfLines={1}>
            Details - {itemClicked}
          </Text>
        </Icon.ToolbarAndroid >

        {/* View */}
        <ScrollView style={styles.container}>
          <Text style={styles.title}>
            Details - Item: {itemClicked}
          </Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu elit, consequat non justo sed, feugiat lobortis magna. Duis rutrum lectus turpis, vitae bibendum sem euismod at. Vivamus eget sem a velit auctor tempus vel ac nunc. Nunc aliquam augue vel ultricies lacinia. Nam ornare diam quis massa placerat, et blandit ex maximus. Donec nec mauris eu eros consectetur sollicitudin. Vivamus eget risus in justo hendrerit posuere. Ut semper dolor sed mauris porta vulputate.
          </Text>
          <Image
            style={styles.image}
            source={require('../assets/matsu.png')}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
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


