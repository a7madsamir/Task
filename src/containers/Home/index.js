import React, { Component } from 'react';
import {  View, FlatList, Image, } from 'react-native';
import { connect } from 'react-redux';
import { TEXTS, } from '../../common';
import { Header, AppText, Button, AppModal } from '../../components';
import ListItem from './ListItem';
import styles from './styles';
import DataImage  from '../../redux/reducers/DataImage.js'

const extractKey = ({ id }) => id;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        }
    }

    image_renderItem({ item }) {
        return (<View style={styles.imageContainer}>
                 <Image source={item.image} style={styles.imageStyle} />
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
                <AppText style={styles.textStyle}>{TEXTS.title}</AppText>
                <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                    data={DataImage}
                    renderItem={this.image_renderItem}
                    keyExtractor={(index) => index.toString()}
                />

                <FlatList
                    keyExtractor={extractKey}
                    data={this.props.lists}
                    renderItem={this.renderItem}
                />

                <View style={styles.btnContainer}>
                    <Button style={styles.btnStyle}
                        onPress={() => (this.setState({ isVisible: true }))}> {TEXTS.btnText}</Button>
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
