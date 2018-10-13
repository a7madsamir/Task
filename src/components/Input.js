import React, { Component } from 'react';
import { View, StyleSheet, Keyboard, TextInput, Text, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../common';
import PropTypes from 'prop-types';




class Input extends Component {
    render() {
        const {
            // icon,
            placeholder,
            maxLength,
            size,
            value,
            onChangeText,
            secureTextEntry,
            keyboardType,
            returnKeyType,
            style,
            textInputStyle,
            placeholderTextColor
        } = this.props;
        return (
            <View style={[styles.inputContainer, style]}>

                <TextInput
                    style={[styles.textInput, textInputStyle]}
                    placeholder={placeholder}
                    maxLength={maxLength || 40}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={placeholderTextColor || '#fff'}
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry || false}
                    keyboardType={keyboardType || 'default'}
                    returnKeyType={returnKeyType}
                    onSubmitEditing={() => Keyboard.dismiss()}

                />
                <Icon
                    name='search'
                    color='#000'
                    size={14}
                />
                { /*  <Icon name={icon} size={size || 35} style={styles.icon} />*/}
            </View>
        );
    }

}

export { Input };

const styles = StyleSheet.create({
    inputContainer: {
        height: 60,
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        color: COLORS.text,
        padding: 5,
        backgroundColor: 'gray',
        opacity: .7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },

    textInput: {
        flex: 1,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        textAlign: 'left',
        fontSize: Platform.select({
            ios: 24,
            android: 18
        }),
    }
})

