import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, Button, TouchableOpacity, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Schedule from '../Schedule/Schedule';
import LandingPage from '../Main/LandingPage';
import Menu from '../../../assets/Menu.png';

const Drawer = createDrawerNavigator();

export default function Header() {
  return (
    <View style={{ alignSelf: 'flex-start'}}>
      {/* <TouchableOpacity>
      <Image style={{height:50, width: 50, marginBottom:130}} source={Menu} />
      </TouchableOpacity>  */}
      <Text>Hello!</Text>
    </View>
  )
}
