import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, ScrollView, TextInput} from 'react-native';
import MHeader from "../components/MHeader"
import MButton from '../components/MButton';
import MInput from '../components/MInput';
import MOtpInput from '../components/MOtpInput'
const GoogleIcon = require('../assets/GoogleIcon/GoogleIcon.png');

class LoginPage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      mobileNo: ''
    };

  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (<ScrollView style={{flex: 1, backgroundColor: "#FBEAFF"}} ref={ref => this.scrollViewRef = ref}>
    <View style={styles.loginPageWrapper}>
      <MInput
        name={"firstName"}
        value={this.state.firstName}
        placeholder="Write your First Name"
        handleInputChange={this.handleInputChange}
        labelText={"First Name"}
        mStyle={styles.mb22}
      />
      <MInput
        name={"lastName"}
        value={this.state.lastName}
        placeholder="Write your Last Name"
        handleInputChange={this.handleInputChange}
        labelText={"Last Name"}
        mStyle={styles.mb22}
      />
      <MInput
        name={"mobileNo"}
        value={this.state.mobileNo}
        placeholder="Enter Your Mobile No / Mail Id "
        handleInputChange={this.handleInputChange}
        labelText={"Mobile No / Mail Id"}
        mStyle={styles.mb22}
      />
      <MButton mbStyle={{width: '100%',}} btnText={'Generate OTP'} onPress={() => alert('Generate OTP')} />
      <View style={styles.otpWrapper}>
        <MOtpInput />
        <MOtpInput />
        <MOtpInput />
        <MOtpInput />
      </View>
      <Text style={[styles.text_14_400, styles.mb22, {color: '#1C1B1F'}]}>Resend otp</Text>
      <MButton mbStyle={{width: '100%', marginBottom: 22}} btnText={'Verify '} onPress={() => alert('Verify')} />
      <View style={styles.orContTextWrapper}>
        <View style={styles.textBar}></View>
        <Text>Or continue with</Text>
        <View style={styles.textBar}></View>  
      </View>
      <Image source={GoogleIcon} style={styles.gImg} />
    </View>
    </ScrollView>)
  }
}

const styles = StyleSheet.create({
  gImg: {
    width: 24,
    height: 24,
    alignSelf: 'center'
  },
  orContTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#1C1B1F',
    marginBottom: 22
  },
  orContText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0,
  },
  textBar: {
    borderTopWidth: 1,
    borderTopColor: '#72567A75',
    width: 70
  },
  loginPageWrapper: {
    paddingTop: 82,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24
  },
  mb22: {
    marginBottom: 22,
  },
  text_14_400: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'right'
  },
  text_16_500: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  text_14_500: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  otpWrapper: {
    marginTop: 22,
    marginBottom: 22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 350
  }
})

export default LoginPage;