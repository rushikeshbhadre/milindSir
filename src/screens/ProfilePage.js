import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, ScrollView, TextInput} from 'react-native';
import MHeader from "../components/MHeader"
import MButton from '../components/MButton';
import MInputSmall from '../components/MInputSmall';
import MOtpInput from '../components/MOtpInput'
const cameraImg = require('../assets/cameraImg/cameraImg.png');

class LoginPage  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName : '',
      name: '',
      mobileNumber: '',
      email: '',
      dob: ''
    };

  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (<ScrollView style={{flex: 1, backgroundColor: "#FBEAFF"}} ref={ref => this.scrollViewRef = ref}>
    <View style={styles.profilePageWrapper}>
      <View style={{width: 124, height: 124, alignSelf: 'center', borderRadius: 100, borderWidth: 2, borderColor: '#1C1B1F', backgroundColor: '#F6F6F6'}}>
        <Image source={cameraImg} style={styles.wh24} />
      </View>
      <Text>{JSON.stringify(this.statex)}</Text>
      <MInputSmall
        name={"screenName"}
        value={this.state.screenName}
        placeholder=""
        handleInputChange={this.handleInputChange}
        labelText={"Screen Name"}
        mStyle={styles.mb22}
      />
      <MInputSmall
        name={"name"}
        value={this.state.name}
        placeholder=""
        handleInputChange={this.handleInputChange}
        labelText={"Name"}
        mStyle={styles.mb22}
      />
      <MInputSmall
        name={"mobileNumber"}
        value={this.state.mobileNumber}
        placeholder=""
        handleInputChange={this.handleInputChange}
        labelText={"Mobile Number"}
        mStyle={styles.mb22}
      />
      <MInputSmall
        name={"email"}
        value={this.state.email}
        placeholder=""
        handleInputChange={this.handleInputChange}
        labelText={"Email"}
        mStyle={styles.mb22}
      />
      <MInputSmall
        name={"dob"}
        value={this.state.dob}
        placeholder=""
        handleInputChange={this.handleInputChange}
        labelText={"Enter Date of Birth"}
        mStyle={styles.mb22}
      />
      <MButton mbStyle={{width: '100%',}} btnText={'Done'} onPress={() => alert('Done')} />
    </View>
    </ScrollView>)
  }
}

const styles = StyleSheet.create({
  profilePageWrapper: {
    paddingTop: 22,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25
  },
  mb22: {
    marginBottom: 22,
  },
  wh24: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 5,
    right: 5
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