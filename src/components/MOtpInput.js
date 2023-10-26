import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, ScrollView, TextInput} from 'react-native';

const MOtpInput = ({
      name,
      value,
      handleInputChange,
      labelText,
      placeholder,
      mStyle
    }) => {
      return (<View style={mStyle}>
        <TextInput
          style={[styles.input, styles.text_14_500]}
          onChangeText={(e) => handleInputChange(name, e)}
          value={value}
          placeholder={placeholder}
        />
      </View>)  
    }

const styles = StyleSheet.create({
  sendFeedbackWrapper: {
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
  input: {
    width: 56.54,
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4D1048',
    backgroundColor: '#F6F6F6'
  },
})

export default MOtpInput;