

import React, {Component} from 'react';
import {View} from 'react-native';
import { AppText } from '../../components';

import styles from './styles';

export default class EmptyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>Soon</AppText>
      </View>
    );
  }
}


