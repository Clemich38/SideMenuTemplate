import React, { Component, PropTypes } from 'react'
import { StatusBar, Image, View, ScrollView, StyleSheet, TextInput, Text, DrawerLayoutAndroid, TouchableOpacity, Navigator, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';

// routes
import { Navigation, pages } from '../routes';

// Redux
import { actionCreators } from '../redux/appRedux'

// Map Redux states to props
const mapStateToProps = (state) => ({
  currentPageIndex: state.currentPageIndex,
})

class App extends Component {

  state = {
    drawerClosed: true,
  }

  static propTypes = {
    currentPageIndex: PropTypes.number.isRequired,
  }

  toggleDrawer = () => {
    if (this.state.drawerClosed) {
      this.drawerElmnt.openDrawer();
    } else {
      this.drawerElmnt.closeDrawer();
    }
  }

  setCurrentPageIndex = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.setCurrentPage(index));
  }

  setDrawerState = () => {
    this.setState({
      drawerClosed: !this.state.drawerClosed
    });
  }

  // Handel hardware back button
  handlesBackButton = () => {
    if (this.props.currentPageIndex !== 0) {
      try {
        this.NAV.resetTo({ id: 0, });
        this.setCurrentPageIndex(0);
      }
      catch (e) { }

      return true;
    }
    BackAndroid.exitApp();
    return false;
  }

  // Add Hardware back button listener
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handlesBackButton);
  }

  // Remove Hardware back button listener
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handlesBackButton);
  }

  // Navigation between main pages
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

  // Render page depending on the route id 
  // (See Navigation class in app/routes.js files)
  renderScene(route, navigator) {
    return Navigation.renderPage(route, navigator);
  }
  

  render() {
    const { currentPageIndex } = this.props

    // Side drawer navigation menu
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require('../assets/menu.png')}>
          <Text style={styles.drawerTitleText}>Side Menu Template</Text>
        </Image>  
        <ScrollView style={styles.container}>
          {pages.map((page, index) => {
            {
              if(page.isInMainMenu)
              {
                return <TouchableOpacity
                    style={styles.drawerItem} 
                    key={index}
                    onPress={this.navigateTo.bind(this, page.index)}>
                    <Icon name={page.icon} size={20} color="dimgrey" />
                    <Text style={styles.drawerText}>{page.title}</Text>
                  </TouchableOpacity>
              }
            }
          })}
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
        {pages[currentPageIndex].isInMainMenu &&
          <Icon.ToolbarAndroid
            titleColor='#fff'
            navIconName='md-menu'
            onIconClicked={this.toggleDrawer}
            style={styles.toolbar}
            overflowIconName="md-more">
            <Text style={styles.toolbarTitle} numberOfLines={1}>
              {pages[currentPageIndex].title}
            </Text>
          </Icon.ToolbarAndroid>
        }
        
        {/* Navigation */}
        <Navigator
          initialRoute={{ id: 0, }}
          renderScene={this.renderScene}
          ref={(nav) => { this.NAV = nav; }}
          configureScene={(route, routeStack) => {
            if(route.id === 5)
              return Navigator.SceneConfigs.FloatFromBottomAndroid
            else
              return Navigator.SceneConfigs.FadeAndroid
          }}/>

      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 150
  },
  drawerItem: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 1,
    marginBottom: 1,
  },
  drawerTitleText: {
    fontSize: 25,
    textAlign: 'left',
    color: 'white',
    paddingLeft: 20,
    top: 100
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
