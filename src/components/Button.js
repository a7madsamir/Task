import React from 'react';
import {StyleSheet ,Text, TouchableOpacity } from 'react-native';
import {AppText} from './AppText';
import { COLORS, SCREEN } from '../common';

const Button = ({ onPress,textStyle ,children, buttonColor ,style}) => {

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.buttonContainer,style]}>
      <AppText style={[styles.buttonText, textStyle]}>{children}</AppText>
    </TouchableOpacity>
  );
};

export  {Button};


const styles = StyleSheet.create({
  buttonContainer:{
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
    elevation:1,
    shadowColor:'#000',
    shadowOffset: {width:0, height:1},
    shadowOpacity:0.2,
    shadowRadius:1,
    backgroundColor: COLORS.blue,

},
buttonText:{
  padding:5,
  color:'#fff',
  backgroundColor:'transparent',
  fontSize: 18
}
});