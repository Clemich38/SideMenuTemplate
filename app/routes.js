import React, { Component, PropTypes } from 'react'

// Pages
import HomePage from './pages/HomePage'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

// Pages routes
export const pages = [
  { component: <HomePage navigator={navigator} />, title: 'Home Page', icon: 'md-home', index: 0 },
  { component: <FirstPage navigator={navigator} />, title: 'First Page', icon: 'md-list', index: 1 },
  { component: <SecondPage navigator={navigator} />, title: 'Second Page', icon: 'md-photos', index: 2 },
  { component: <SecondPage navigator={navigator} />, title: 'Second Page bis', icon: 'md-paw', index: 3 },
  { component: <SecondPage navigator={navigator} />, title: 'Second Page ter', icon: 'md-paper-plane', index: 4 }
];