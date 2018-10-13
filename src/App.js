
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Platform, StyleSheet, Text, View, I18nManager} from 'react-native';
import store from './redux/store';
import { Actions } from 'react-native-router-flux';
import Router from './router';
I18nManager.allowRTL(false);

export default class App extends Component{
  render() {
    return (
      <Provider store={store.store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});
