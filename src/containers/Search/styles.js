import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS, SCREEN } from '../../common';

export default styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({
      ios: 20,
    }),
    backgroundColor: '#fff',
    flex:1
  },
  headerContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: COLORS.blue,
    flex:1
  },
  inputContainer: {
    height: 30,
    flexDirection: 'row',
    width: SCREEN.WIDTH * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#e8e9ea',
    borderColor: COLORS.icon,
    borderRadius: 30,
    margin: 10,
    padding: 5

},
icon: {
    color: '#a0a1a5',
    marginRight: 15
},
textInput: {
  //  flex: 1,
    ...FONTS.small,
    color: '#a0a1a5',
    //paddingHorizontal: 5,
   // marginHorizontal: 10,
    textAlign: 'center',
    paddingTop:5

},
searchSection: {
  //flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'blue',
  marginLeft: 15,
  marginRight:15,
  borderRadius: 20,

},
searchIcon: {
  padding: 10,
},
input: {
  flex: 1,
  paddingTop: 10,
  paddingRight: 10,
  paddingBottom: 10,
  paddingLeft: 0,
  backgroundColor: 'blue',
  borderRadius: 20,
  color: '#424242',
},
headerContainer:{
  height: 70,
  justifyContent : 'center',
  alignItems: 'center'
},
});