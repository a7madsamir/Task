import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../common';

export default styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({
      ios: 20,
    }),
    backgroundColor: COLORS.white,
    flex:1
  },
  headerContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
});