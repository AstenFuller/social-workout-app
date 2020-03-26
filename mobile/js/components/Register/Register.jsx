import React, { Component } from 'react';
import { View } from 'react-native';
import { register } from '../../../styles/Styles';
// import { connect } from 'react-redux';

export default class Register extends Component {

  handleUsername = text => {
    const { dispatch } = this.props;
    dispatch(handleLoginEmail(text))
  }

  handleEmail = text => {
    const { dispatch } = this.props;
    dispatch(handleLoginEmail(text))
  }

  handlePassword = text => {
    const { dispatch } = this.props;
    dispatch(handleLoginPassword(text))
  }

  handleConfirmedPassword = text => {
    const { dispatch } = this.props;
    dispatch(handleConfirmedLoginPassword(text))
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    dispatch(handleLoginSubmit(this.props.username, this.props.loginEmail, this.props.loginPassword, this.props.confirmedLoginPassword))
  }
  render() {
    return (
      <View>
        <View style={{ paddingBottom: 75 }}>
          <Text style={register.header}>Sign In</Text>
        </View>
        <TextInput
          style={register.input}
          placeholder="Enter Username"
          placeholderTextColor='white'
          onChangeText={text => this.handleUserName(text)}
        />
        <TextInput
          style={register.input}
          placeholder="Enter Email"
          placeholderTextColor='white'
          onChangeText={text => this.handleEmail(text)}
        />
        <TextInput
          style={register.input}
          placeholder="Enter Password"
          placeholderTextColor='white'
          onChangeText={text => this.handlePassword(text)}
        />
        <TextInput
          style={register.input}
          placeholder="Confirm Password"
          placeholderTextColor='white'
          onChangeText={text => this.handleConfirmedPassword(text)}
        />
        <TouchableOpacity
          style={register.button}
          onPress={this.handleSubmit}
        >
          <Text style={register.buttonText}>Create User</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStoreToProps(store) {
    return {
      username: store.register.username,
      loginEmail: store.register.loginEmail,
      loginPassword: store.register.loginPassword,
      confirmedLoginPassword: store.register.confirmedLoginPassword,
      success: store.register.success
    }
  }

export default connect(mapStoreToProps)(LandingPage);