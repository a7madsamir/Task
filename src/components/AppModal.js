/**
 * This is Reusable Component For Modal
 */

import React, { Component } from 'react';
import { View, Modal, Dimensions, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { AppText, Button } from '.';
import { SCREEN, COLORS } from '../common';
import { Actions } from 'react-native-router-flux';


const WIDTH = Dimensions.get('window').width;

class AppModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    }
  }
  render() {
    const {  style, outStyle ,onDecline } = this.props;
    const { isVisible } = this.state;

    return (
      <Modal
        visible={isVisible}
        transparent
        onRequestClose={() => { }}
      >
        <View style={[styles.containerStyle, outStyle]}>
          <View style={[styles.modalStyle, style]}>
          <AppText style={styles.text}>Soon</AppText>
            <Button style={{width: SCREEN.WIDTH * .5 , height: 40}}
              buttonColor={COLORS.blue}
              onPress={onDecline} > Okay
               </Button>
          </View>
        </View>
      </Modal>
    );

  }
}

export {AppModal}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: WIDTH * 0.6,
    height: SCREEN.HEIGHT * 0.25,
    borderRadius: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: COLORS.blue
  },
});
