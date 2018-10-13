
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { I18nManager } from 'react-native';
import store from './redux/store';
import Router from './router';

// To not allow to change design when change language in android device
I18nManager.allowRTL(false);

export default class App extends Component {
  render() {
    return (
      <Provider store={store.store}>
        <Router />
      </Provider>
    );
  }
}


