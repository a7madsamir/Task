
import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    NativeModules,
    LayoutAnimation,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Scene, Router, Drawer, Tabs, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from '../../common/CardSection';
import { IMAGES, COLORS, TEXTS, FONTS } from '../../common';
import * as actions from '../../redux/actions';


class ListItem extends Component {

    constructor() {
        super();
        this.renderDescription = this.renderDescription.bind(this);

    }

    renderDescription() {
        return (Actions.desc({ item: this.props.item }), console.log("yes"));
    }

    render() {
        const { titleStyle, subTitleStyle } = styles;
        const { id, title, subTitle } = this.props.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => { (this.props.selectLibrary(id) , this.renderDescription() , console.log("yes"))}}>
                <View style={{ padding: 5 }}>
                    <CardSection>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View>
                                <Text style={titleStyle}>
                                    {title}
                                </Text>
                                <Text style={subTitleStyle}>
                                    {subTitle}
                                </Text>
                            </View>

                            <View>
                                <Icon size={25} color={'#000'} name={'angle-right'} />
                            </View>
                        </View>
                    </CardSection>
                    
                </View>
            </TouchableWithoutFeedback>
        );

    }

}


const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        padding: 2.5,
    },
    subTitleStyle: {
        fontSize: 12,
        padding: 2.5,
        color: 'gray'
    }
});

const mapStateToProps = (state, ownProps) => {

    ownProps = expanded = state.selectedListId === ownProps.item.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);