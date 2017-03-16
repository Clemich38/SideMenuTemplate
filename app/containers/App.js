import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text, DrawerLayoutAndroid, TouchableOpacity, Navigator } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header'

// Pages
import HomePage from '../pages/HomePage'
import FirstPage from '../pages/FirstPage'

// Redux
import { actionCreators } from '../redux/appRedux'

const mapStateToProps = (state) => ({
  items: state.items,
  
})

class App extends Component {

    state = {
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

  render() {

    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
      </View>
    );
    
    return (
      <DrawerLayoutAndroid
        ref={(drawerElement) => { this.drawerElmnt = drawerElement; }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>

        <Icon.ToolbarAndroid
          titleColor='#fff'
          navIconName='md-menu'
          onIconClicked={this.toggleDrawer}
          style={styles.toolbar}
          overflowIconName="md-more">
          <Text style={styles.toolbarTitle} numberOfLines={1}>
            Toolbar Title
          </Text>
        </Icon.ToolbarAndroid>
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

  /*< TouchableOpacity onPress= { this.toggleDrawer } style= { styles.container } >
    <Header>
      Super Titre
          </Header>
        </TouchableOpacity >*/