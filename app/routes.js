import React, { Component, PropTypes } from 'react'

// Pages
import HomePage from './pages/HomePage'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import DetailsPage from './pages/DetailsPage'

// Pages routes
export const pages = [
  { component: HomePage, title: 'Home Page', icon: 'md-home', index: 0, isInMainMenu: true},
  { component: FirstPage, title: 'First Page', icon: 'md-list', index: 1, isInMainMenu: true},
  { component: SecondPage, title: 'Second Page', icon: 'md-photos', index: 2, isInMainMenu: true},
  { component: SecondPage, title: 'Second Page bis', icon: 'md-paw', index: 3, isInMainMenu: true},
  { component: SecondPage, title: 'Second Page ter', icon: 'md-paper-plane', index: 4, isInMainMenu: true},
  { component: DetailsPage, title: 'Details', icon: 'md-home', index: 5, isInMainMenu: false}
];

export class Navigation {

  static renderPage(route, navigator) {
    if (route.id === 0)
      return <HomePage navigator={navigator} />
    else if (route.id === 1)
      return <FirstPage navigator={navigator} />
    else if (route.id === 2)
      return <SecondPage navigator={navigator} />
    else if (route.id === 3)
      return <SecondPage navigator={navigator} />
    else if (route.id === 4)
      return <SecondPage navigator={navigator} />
    else if (route.id === 5)
      return <DetailsPage navigator={navigator} />
  }
}