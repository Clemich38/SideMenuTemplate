import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text, DrawerLayoutAndroid, TouchableOpacity, Navigator } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header'

// Pages
import HomePage from '../pages/HomePage'
import FirstPage from '../pages/FirstPage'
import SecondPage from '../pages/SecondPage'

// routes
import { pages } from '../routes';

// Redux
import { actionCreators } from '../redux/appRedux'

const mapStateToProps = (state) => ({
  items: state.items,
  
})

class App extends Component {

  state = {
    currentPageIndex: 0,
    drawerClosed: true,
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  toggleDrawer = () => {
    if (this.state.drawerClosed) {
      this.drawerElmnt.openDrawer();
    } else {
      this.drawerElmnt.closeDrawer();
    }
  }

  setCurrentPageIndex = (index) => {
    this.setState({
      currentPageIndex: index
    });
  }

  setDrawerState = () => {
    this.setState({
      drawerClosed: !this.state.drawerClosed
    });
  }

  navigateTo(routeId) 
  {
    // Close the drawer
    this.drawerElmnt.closeDrawer();

    if (routeId === 0) 
      this.NAV.resetTo({ id: 0, });
    else
      this.NAV.push({ id: routeId, })

    this.setCurrentPageIndex(routeId)
  }

  renderScene(route, navigator) {
    return pages[route.id].component
  }

  render() {

    var navigationView = (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {pages.map((page, index) => (
          <TouchableOpacity
            key={index}
            onPress={this.navigateTo.bind(this, page.index)}>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>{page.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
    
    return (
      <DrawerLayoutAndroid
        ref={(drawerElement) => { this.drawerElmnt = drawerElement; }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        onDrawerOpen={this.setDrawerState}
        onDrawerClose={this.setDrawerState}>

        {/* ToolBar*/}
        <Icon.ToolbarAndroid
          titleColor='#fff'
          navIconName='md-menu'
          onIconClicked={this.toggleDrawer}
          style={styles.toolbar}
          overflowIconName="md-more">
          <Text style={styles.toolbarTitle} numberOfLines={1}>
            {pages[this.state.currentPageIndex].title}
          </Text>
        </Icon.ToolbarAndroid>

        {/* Navigation */}
        <Navigator
          initialRoute={{ id: 0, }}
          renderScene={this.renderScene}
          ref={(nav) => { this.NAV = nav; }}/>

      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    height: 56,
    backgroundColor: 'lightsteelblue',
    elevation: 2
  },
  toolbarTitle: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 10
  }
})

export default connect(mapStateToProps)(App)
