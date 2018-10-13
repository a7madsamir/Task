import { StyleSheet, Platform } from 'react-native';
import { SCREEN, COLORS, FONTS } from '../../common';

export default styles = StyleSheet.create({
    container: {
        marginTop: Platform.select({
            ios: 20,
        }),
        backgroundColor: '#fff',
        flex: 1,
    },
    imageContainer: {
        marginBottom: 25,
        flex: 1
    },
    imageStyle: {
        height: 60,
        width: 150,
        margin: 10,
        borderRadius: 10
    },
    textStyle: {
        marginTop: 15,
        marginLeft: 20,
        ...FONTS.medium,
        color: COLORS.blue
    },
    btnContainer: {
        bottom: 10,
        left: '50%',
        right: '50%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnStyle: {
        backgroundColor: COLORS.blue,
        borderRadius: 30,
        width: SCREEN.WIDTH * 0.6,
        height: SCREEN.WIDTH * 0.1,
    },
    titleStyle: {
        fontSize: 16,
        padding: 2.5,
    },
    subTitleStyle: {
        fontSize: 12,
        padding: 2.5,
        color: 'gray'
    },
    titleContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});