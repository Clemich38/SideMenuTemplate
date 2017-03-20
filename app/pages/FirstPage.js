import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Navigator, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import List from '../components/List'
import DetailsPage from '../pages/DetailsPage'

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  items: state.items,
  currentPageIndex: state.currentPageIndex,
  itemClicked: state.itemClicked,
})

class FirstPage extends Component {

  setCurrentPageIndex = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.setCurrentPage(index));
  }

  // Set clicked item value to display it on the DetailsPage
  setItemClicked = (itemIndex) => {
    const { dispatch } = this.props
    dispatch(actionCreators.setItemClicked(itemIndex));
  }

  // Navigate to DetailsPage
  navigateToDetails = (index) => {
    this.props.navigator.push({ id: 5, })
    this.setCurrentPageIndex(5)
    this.setItemClicked(index)
  }

  render() {
    const { items, navigator } = this.props

    return (
      <View style={styles.container}>
        <List list={items}
              onGotoDetails={this.navigateToDetails}>
        </List>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default connect(mapStateToProps)(FirstPage)

