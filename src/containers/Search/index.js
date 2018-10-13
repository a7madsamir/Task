

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { Header, AppText, TEXTS } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome'

import { Scene, Router, Drawer, Tabs, Actions } from 'react-native-router-flux';
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


