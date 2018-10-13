import React, { Component } from 'react';
import { Scene, Router, Drawer, Tabs, Actions } from 'react-native-router-flux';
import Home from '../containers/Home';
import Desc from '../containers/Desc';
import EmptyScreen from '../containers/EmptyScreen';
import Search from '../containers/Search';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../common';
import { View, Text, Image } from 'react-native';

class TabIcon extends Component {
    constructor(props) {
        super(props)
        this.state = { message: null }
    }

    render() {
        let color = this.props.focused ? COLORS.blue : COLORS.icon;

        return (
            <View style={{alignItems: 'center' , justifyContent: 'center' , padding: 5}}>
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
                    <Scene hideNavBar key="Feeds"  title={'Feeds'} component={EmptyScreen} icon={TabIcon} iconName={'rss-square'} />
                    <Scene hideNavBar key="Profile" title={'Profiles'} component={EmptyScreen} icon={TabIcon} iconName={'users'} />
                    <Scene initial hideNavBar key="Market" title={'Market'} component={Home} icon={TabIcon} iconName={'shopping-cart'} />
                    <Scene hideNavBar key="Bids" title={'Bids'}  component={EmptyScreen} icon={TabIcon} iconName={'gavel'} />
                    <Scene hideNavBar key="More" title={'More'}  component={EmptyScreen} icon={TabIcon} iconName={'braille'} />
                </Scene>
                <Scene hideNavBar key="desc" component={Desc} />
                <Scene hideNavBar key="search" component={Search} />

            </Scene>
        </Router>
    );
};

export default RouterComponent;
