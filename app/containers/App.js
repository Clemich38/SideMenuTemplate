import React, { Component, PropTypes } from 'react'
import { StatusBar, Image, View, ScrollView, StyleSheet, TextInput, Text, DrawerLayoutAndroid, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';

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

  handlesBackButton = () => {
    if (this.state.currentPageIndex !== 0) {
      try {
        this.NAV.resetTo({ id: 0, });
        this.setCurrentPageIndex(0);
      }
      catch (e) { }

      return true;
    }
    return false;
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handlesBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handlesBackButton);
  }

  navigateTo(routeId) 
  {
    // Close the drawer
    this.drawerElmnt.closeDrawer();

    if (routeId !== this.state.currentPageIndex)
    {
      if (routeId === 0) 
        this.NAV.resetTo({ id: 0, });
      else
      {
        this.NAV.push({ id: routeId, })
      }

      this.setCurrentPageIndex(routeId)
    }
  }

  renderScene(route, navigator) {
    return pages[route.id].component
  }

  render() {

    var navigationView = (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/sakura.png')}
        />
        <ScrollView style={styles.container}>
          {pages.map((page, index) => (
            <TouchableOpacity
              style={styles.drawerItem} 
              key={index}
              onPress={this.navigateTo.bind(this, page.index)}>
              <Icon name={page.icon} size={20} color="dimgrey" />
              <Text style={styles.drawerText}>{page.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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

        <StatusBar backgroundColor='#3a6c96' barStyle="light-content"/>
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
          ref={(nav) => { this.NAV = nav; }}
          configureScene={(route, routeStack) =>
            Navigator.SceneConfigs.FadeAndroid
          }/>

      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 150,
  },
  drawerItem: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 1,
    marginBottom: 1,
  },
  drawerText: {
    fontSize: 15,
    textAlign: 'left',
    flexDirection: 'row',
    paddingLeft: 30
  },
  container: {
    flex: 1,
    paddingTop: 15
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
  }
})

export default connect(mapStateToProps)(App)
