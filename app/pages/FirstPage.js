import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import List from '../components/List'


const mapStateToProps = (state) => ({
  items: state.items,
})

class FirstPage extends Component {

  render() {
    const { items } = this.props
    return (
      <View style={styles.container}>
        <List list={items}
          onToggle={this.onToggleItemCompleted}
          onRemoveItem={this.onRemoveItem}>
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

