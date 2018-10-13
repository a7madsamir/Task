import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS } from '../../common';

export default styles = StyleSheet.create({
    container: {
        marginTop: Platform.select({
            ios: 20,
        }),
        backgroundColor: '#fff',
        flex: 1,
    },
    listContainer: {
        flex: 1
    },
    buttonsGroup: {
        marginTop: 20,
        alignItems: 'center'
    },
    button: {
        borderRadius: 0,
        alignSelf: 'stretch',
        width: 250,
        height: 40,
        marginLeft: 20,
        marginRight: 20,
        color: COLORS.text,
        padding: 5,
        backgroundColor: COLORS.pink,
    },
    buttonText: {
        color: COLORS.white,
        ...FONTS.xMedium,
    },
    pointsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    pointsText: {
        ...FONTS.extraLarge,
        color: COLORS.yellow
    },
    title: {
        margin: 15,
        ...FONTS.extraLarge,
        color: COLORS.yellow
    }
});