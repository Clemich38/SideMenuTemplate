import React, { Component, PropTypes } from 'react'

// Pages
import HomePage from './pages/HomePage'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

// Pages routes
export const pages = [
  { component: <HomePage navigator={navigator} />, title: 'Home Page', index: 0 },
  { component: <FirstPage navigator={navigator} />, title: 'First Page', index: 1 },
  { component: <SecondPage navigator={navigator} />, title: 'Second Page', index: 2 }
];