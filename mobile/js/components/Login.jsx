import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {login} from '../../styles/Styles';

export default class Login extends Component {

    render() {
        return (
           <View style={login.container}>
               <TextInput style={login.input} placeholder="Enter Email" placeholderTextColor='white' />
               <TextInput style={login.input} placeholder="Enter Password" placeholderTextColor='white'/>
               <TouchableOpacity style={login.button}>
                   <Text style={login.buttonText}>Sign In</Text>
               </TouchableOpacity>
               <TouchableOpacity style={login.button}>
                   <Text style={login.buttonText}>Register</Text>
               </TouchableOpacity>     
           </View>
        )
    }
}
