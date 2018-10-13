
import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../../common/CardSection';
import { Header, AppText } from '../../components';
import styles from './styles';

export default class Desc extends Component {

    render() {
        const { description , title } = this.props.item;
        return (
            <View style={styles.container}>
                <Header search back onPress={()=> Actions.Market() } style={styles.headerContainer} />
                <CardSection>
                    <AppText style={styles.titleStyle}>
                        {title}
                    </AppText>
                </CardSection>
                <CardSection>
                    <AppText style={styles.descStyle}>
                        {description}
                    </AppText>
                </CardSection>
            </View>

        );
    }
}
