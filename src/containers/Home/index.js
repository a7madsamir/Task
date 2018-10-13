

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { IMAGES, COLORS, TEXTS, FONTS, SCREEN } from '../../common';
import { Header, AppText, Button, AppModal } from '../../components';
import ListItem from './ListItem';
import styles from './styles';

const extractKey = ({ id }) => id;
const imageData = require('../../redux/reducers/DataImage.json');

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
         /*   dataSource: [
                {
                    image_url: require('../../images/Gallery/show1.png'),
                },
                {
                    image_url: require('../../images/Gallery/show2.png'),
                },
                {
                    image_url: require('../../images/Gallery/show3.png'),
                },
                {
                    image_url: require('../../images/Gallery/show4.png'),
                },
                {
                    image_url: require('../../images/Gallery/show1.png'),
                }
            ]*/

        }

    }

    image_renderItem({ item }) {

        return (<View style={{ marginBottom: 25, flex: 1 }}>

                 <Image source={{uri : item.image_url}} style={{ height: 60, width: 150, margin: 10, borderRadius: 10 }} />

              </View>
        )

    }
    renderItem({ item }) {

        return <ListItem item={item} />
    }
    onDecline() {
        this.setState({ isVisible: false })
    }
    render() {

        const { isVisible } = this.state;

        return (
            <View style={styles.container}>
                <Header avatar search icon />
                <AppText style={{ marginLeft: 20, ...FONTS.medium, color: COLORS.blue }}>{TEXTS.title}</AppText>

                <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                    data={imageData}
                    renderItem={this.image_renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

                <FlatList
                    keyExtractor={extractKey}
                    data={this.props.lists}
                    renderItem={this.renderItem}
                />

                <View style={{ bottom: 10, left: '50%', right: '50%', position: 'absolute', justifyContent: 'center', alignItems: 'center', }}>
                    <Button style={{ backgroundColor: COLORS.blue, borderRadius: 30, width: SCREEN.WIDTH * 0.6, height: SCREEN.WIDTH * 0.1, }}
                        onPress={() => (this.setState({ isVisible: true }), console.log("isVisible" + isVisible))}>  +  Sell your Product </Button>
                </View>

                {isVisible && <AppModal onDecline={this.onDecline.bind(this)} visible={true} />}

            </View>

        );
    }
}

const mapStateToProps = state => {
    return { lists: state.lists };
};

export default connect(mapStateToProps)(Home)
