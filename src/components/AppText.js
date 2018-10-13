import React from 'react';
import {Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const AppText = ({children, style, ...rest})=>{
    return (
        <Text style={[style]} {...rest}>{children}</Text>
    )
}

AppText.propTypes = {
    //children : PropTypes.node.isRequired,
    style : Text.propTypes.style
}

export {AppText};

