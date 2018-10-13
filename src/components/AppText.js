import React from 'react';
import {Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {STYLES} from '../common';

const AppText = ({children, style, ...rest})=>{
    return (
        <Text style={[STYLES.text ,style]} {...rest}>{children}</Text>
    )
}

AppText.propTypes = {
    //children : PropTypes.node.isRequired,
    style : Text.propTypes.style
}

export {AppText};

