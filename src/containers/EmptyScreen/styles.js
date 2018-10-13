import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.white,
        },
        text: {
          ...FONTS.large,
          margin: 10,
          color: COLORS.blue
        },
      });