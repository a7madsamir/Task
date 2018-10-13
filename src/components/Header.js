import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity , TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TEXTS, STYLES, COLORS, FONTS, IMAGES, ICONS,SCREEN  } from '../common';
import { AppText, Input, SearchBox } from './index';

class Header extends Component {
  render() {
    const { onPress, style, styleBackIcon } = this.props;
    let back = this.props.back ?  <TouchableOpacity style={[styles.backIcon, styleBackIcon]} onPress={onPress}>
    <Icon size={25} color={COLORS.blue} name={'chevron-left'} style={{ marginRight: 10 }} /> 
      </TouchableOpacity>: null;
    let avatar = this.props.avatar ? <Image style={styles.avatar} source={ICONS.avatar} /> : null;
    let search = this.props.search ? <SearchBox /> : null;
    let icon = this.props.icon ? <Icon size={25} color={'#a0a1a5'} name={'bell'} style={{ marginRight: 10 }} /> : null;
    let searchInput= this.props.searchInput ? ( <View style={styles.searchSection}>
    <Icon style={styles.searchIcon} name="search" size={20} color="#a0a1a5" />
    <TextInput
      style={styles.input}
      placeholder="search"
     // onChangeText={(searchString) => { this.setState({ searchString }) }}
      underlineColorAndroid="transparent"
    />
  </View> ): null
    return (
      <View style={[styles.viewStyle, style]}>
        {back}
        {avatar}
        {search}
        {icon}
        {searchInput}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f7f7f7',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row',
  },
  textStyle: {
    color: COLORS.black,
    ...FONTS.xLarge,
    marginTop: 10
  },
  avatar: {
    width: 50,
    height: 50,
    marginBottom: 5,
    borderRadius: 25,
    marginLeft: 5
    // borderWidth:3,
    // borderColor:'#777'
  },
  backIcon: {
    //flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight:25
  },
  searchSection: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e9ea',
    marginLeft: 15,
    marginRight:15,
    borderRadius: 20,
    width : SCREEN.WIDTH * 0.65,

  
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#e8e9ea',
    borderRadius: 20,
  
    color: '#424242',
  },
});

export { Header };
