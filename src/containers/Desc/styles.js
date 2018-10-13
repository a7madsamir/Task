import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default styles = StyleSheet.create({
    container: {
        marginTop: Platform.select({
            ios: 20,
        }),
        backgroundColor: '#fff'
    },
    headerContainer:{
        height: 70,
        justifyContent : 'center',
        alignItems: 'center'
    },
    titleStyle:{
        fontSize : 20,
        fontWeight: 'bold',
        padding: 5,
        color: COLORS.blue
    },
    descStyle:{
        fontSize : 16,
        fontWeight: 'bold',
        padding: 5
        
       }
});