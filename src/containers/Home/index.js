

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { IMAGES, COLORS, TEXTS, FONTS, SCREEN } from '../../common';
import { Header, AppText, Button, AppModal } from '../../components';
import ListItem from './ListItem';
import styles from './styles';

const extractKey = ({ id }) => id;

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            
        }
    }
    renderItem({ item }) {

        return <ListItem item={item} />
    }
    onDecline(){
        this.setState({ isVisible: false })
    }
    render() {
        
        const { isVisible } = this.state;
        
        return (
            <View style={styles.container}>
                <Header avatar search icon />
                <AppText style={{ marginTop: 15, marginLeft: 20, ...FONTS.medium, color: COLORS.blue }}>{TEXTS.title}</AppText>
                <View style={{ marginBottom: 15 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={IMAGES.show1} style={{ height: 60, width: 150, margin: 10, borderRadius: 10 }} />
                        <Image source={IMAGES.show2} style={{ height: 60, width: 150, margin: 10, borderRadius: 10 }} />
                        <Image source={IMAGES.show3} style={{ height: 60, width: 150, margin: 10, borderRadius: 10 }} />
                        <Image source={IMAGES.show4} style={{ height: 60, width: 150, margin: 10, borderRadius: 10 }} />
                    </ScrollView>
                </View>

                <FlatList
                    keyExtractor={extractKey}
                    data={this.props.libraries}
                    renderItem={this.renderItem}
                />

                <View style={{ bottom: 10, left: '50%', right: '50%', position: 'absolute' ,justifyContent: 'center' , alignItems: 'center', }}>
                    <Button style={{ backgroundColor: COLORS.blue, borderRadius: 30, width: SCREEN.WIDTH * 0.6, height: SCREEN.WIDTH * 0.1, }}
                        onPress={() => (this.setState({ isVisible: true }), console.log("isVisible"+isVisible))}>  +  Sell your Product </Button>
                </View>

                {isVisible && <AppModal onDecline={this.onDecline.bind(this)} visible={true} /> }
                
            </View>

        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(Home)
