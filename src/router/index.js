import React, { Component } from 'react';
import { Scene, Router, Drawer, Tabs, Actions } from 'react-native-router-flux';
import Home from '../containers/Home';
import Desc from '../containers/Desc';
import EmptyScreen from '../containers/EmptyScreen';
import Search from '../containers/Search';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, TEXTS } from '../common';
import { View, Text, Image } from 'react-native';

class TabIcon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let color = this.props.focused ? COLORS.blue : COLORS.icon;

        return (
            <View style={styles.container}>
            <Icon size={25} color={color} name={this.props.iconName} />
            <Text style={[{color: color},styles.tabText ]}>{this.props.title}</Text>
            </View>
        );
    }
}

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="tabbar"
                    hideNavBar
                    tabs tabBarStyle={styles.tabBarStyle}
                     showLabel={false}
                    tabBarPosition="bottom"
                    swipeEnabled={false}
                >
                    <Scene hideNavBar key="Feeds"  title={TEXTS.feeds} component={EmptyScreen} icon={TabIcon} iconName={'rss-square'} />
                    <Scene hideNavBar key="Profile" title={TEXTS.profiles} component={EmptyScreen} icon={TabIcon} iconName={'users'} />
                    <Scene initial hideNavBar key="Market" title={TEXTS.market} component={Home} icon={TabIcon} iconName={'shopping-cart'} />
                    <Scene hideNavBar key="Bids" title={TEXTS.bids}  component={EmptyScreen} icon={TabIcon} iconName={'gavel'} />
                    <Scene hideNavBar key="More" title={TEXTS.more}  component={EmptyScreen} icon={TabIcon} iconName={'braille'} />
                </Scene>
                <Scene hideNavBar key="desc" component={Desc} />
                <Scene hideNavBar key="search" component={Search} />

            </Scene>
        </Router>
    );
};

export default RouterComponent;
