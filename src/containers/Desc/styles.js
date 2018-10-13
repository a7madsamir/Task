import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default styles = StyleSheet.create({
    container: {
        marginTop: Platform.select({
            ios: 20,
        }),
        backgroundColor: COLORS.white
    },
    headerContainer:{
        height: 70,
        justifyContent : 'center',
        alignItems: 'center'
    },
    titleStyle:{
        ...FONTS.xLarge,
        padding: 5,
        color: COLORS.blue
    },
    descStyle:{
        ...FONTS.xMedium,
        padding: 5
        
       }
});