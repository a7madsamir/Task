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
    descStyle:{
        fontSize : 20,
        fontWeight: 'bold',
        padding: 5
        
       }
});