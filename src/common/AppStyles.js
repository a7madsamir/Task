import {Platform, StyleSheet, Dimensions} from 'react-native';

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

export const STYLES = {

    logo:{
        flex:1,
    },
    logoContainer:{
        marginTop : 40,
        width:200,
        height:200,
        alignItems:'center',
        justifyContent:'center'
    },

    listStyle:{
        listContainer:{
            flex:1,
            alignItems:'center',
            marginVertical:10,
        },
        listStyle:{
            flex:1,
            marginBottom:10
        }
    },
    spinner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    toast:{
        info : {
            container: {
            backgroundColor: '#2487DB',
            alignItems:'center',
            justifyContent:'center',
            paddingTop: 25,
            paddingRight: 15,
            paddingBottom: 15,
            paddingLeft: 15
            }
  },
        error : {
            container: {
            backgroundColor: 'red',
            alignItems:'center',
            justifyContent:'center',
            paddingTop: 25,
            paddingRight: 15,
            paddingBottom: 15,
            paddingLeft: 15
            }
  },
  success : {
    container: {
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent:'center',
    paddingTop: 25,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15
    }
}
    }
}


