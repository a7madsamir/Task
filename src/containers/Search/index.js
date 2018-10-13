

import React, { Component } from 'react';
import {  View } from 'react-native';
import { Header } from '../../components';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header back searchInput style={styles.headerContainer} onPress={()=> Actions.Market() }/>
      </View>
    );
  }
}


