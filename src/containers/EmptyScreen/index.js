

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from './styles';

export default class EmptyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Soon</Text>
      </View>
    );
  }
}


