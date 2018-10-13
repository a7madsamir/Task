import {Platform, StyleSheet, Dimensions} from 'react-native';
 //Using Font
const FONT_FAMILY = 'Myriad Pro'
export const FONTS = {
    tiny :{
        fontFamily : FONT_FAMILY,
        fontSize : 11
    },
    small:{
        fontFamily : FONT_FAMILY,
        fontSize : 14
    },
    xMedium : {
        fontFamily : FONT_FAMILY,
        fontSize : 16
    },
    medium : {
        fontFamily : FONT_FAMILY,
        fontSize : 18
    },
    xLarge : {
        fontFamily : FONT_FAMILY,
        fontSize : 20
    },
    large:{
        fontFamily : FONT_FAMILY,
        fontSize : 30
    },
    extraLarge:{
        fontFamily : FONT_FAMILY,
        fontSize : 50
    }
}

export const SCREEN = {
    WIDTH : Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height
}




