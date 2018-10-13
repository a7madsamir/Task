import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
        },
        text: {
          fontSize: 24,
          textAlign: 'center',
          margin: 10,
          color: COLORS.blue
        },
      });