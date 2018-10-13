
import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from '../../common/CardSection';
import {  COLORS } from '../../common';
import * as actions from '../../redux/actions';
import styles from './styles';


class ListItem extends Component {

    constructor() {
        super();
        this.renderDescription = this.renderDescription.bind(this);

    }

    renderDescription() {
        return (Actions.desc({ item: this.props.item }))
    }

    render() {
        const { titleStyle, subTitleStyle } = styles;
        const { id, title, subTitle } = this.props.item;
        return (
            <TouchableWithoutFeedback onPress={() => { (this.props.selectList(id) , this.renderDescription() )}}>
                <View style={{ padding: 5 }}>
                    <CardSection>
                        <View style={styles.titleContainer}>
                            <View>
                                <Text style={titleStyle}>
                                    {title}
                                </Text>
                                <Text style={subTitleStyle}>
                                    {subTitle}
                                </Text>
                            </View>

                            <View>
                                <Icon size={25} color={COLORS.black} name={'angle-right'} />
                            </View>
                        </View>
                    </CardSection>
                    
                </View>
            </TouchableWithoutFeedback>
        );

    }

}



const mapStateToProps = (state, ownProps) => {

    ownProps = expanded = state.selectedListId === ownProps.item.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);