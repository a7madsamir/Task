import React, { Component } from 'react';
import { View, StyleSheet, Keyboard, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { SCREEN, FONTS, TEXTS, COLORS } from '../common';
import PropTypes from 'prop-types';
import { AppText } from '.';
import { Actions } from 'react-native-router-flux';




class SearchBox extends Component {
    render() {
        const {
            value,
            onChangeText,
        } = this.props;
        return (
            <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={()=>Actions.search()} >
                <Icon name={"search"} size={15} style={styles.icon}></Icon>
                <AppText style={styles.textInput} >{TEXTS.searchPlaceholder}</AppText>
            </TouchableOpacity>
        );
    }

}


SearchBox.propTypes = {
    searchModel: PropTypes.string
}

export { SearchBox };

const styles = StyleSheet.create({
    container: {
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

    }
})