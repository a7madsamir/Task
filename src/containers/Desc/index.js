
import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    NativeModules,
    LayoutAnimation,
    StyleSheet,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Scene, Router, Drawer, Tabs, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from '../../common/CardSection';
import { IMAGES, COLORS, TEXTS, FONTS } from '../../common';
import { Header, AppText } from '../../components';
import ListItem from '../Home/ListItem';
import * as actions from '../../redux/actions';
import styles from './styles';

export default class Desc extends Component {

    render() {
        console.log(this.props.item)
        const { description } = this.props.item;
        return (
            <View style={styles.container}>
                <Header search back onPress={()=> Actions.Market() } style={styles.headerContainer} />
                <CardSection>
                    <Text style={styles.descStyle}>
                        {description}
                    </Text>
                </CardSection>
            </View>

        );
    }
}
