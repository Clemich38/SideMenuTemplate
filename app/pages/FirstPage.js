import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Navigator, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import List from '../components/List'
import DetailsPage from '../pages/DetailsPage'

// Redux
import { actionCreators } from '../redux/appRedux'

const mapStateToProps = (state) => ({
  items: state.items,
  currentPageIndex: state.currentPageIndex,
})

class FirstPage extends Component {

  setCurrentPageIndex = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.setCurrentPage(index));
  }

  navigateToDetails(routeId) {
    this.props.navigator.push({ id: routeId, })
    this.setCurrentPageIndex(routeId)
  }

  render() {
    const { items, navigator } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.navigateToDetails.bind(this, 5)}>
          <Text>click test</Text>
        </TouchableOpacity>

        <List list={items}>
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

