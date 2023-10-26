import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, ScrollView, TextInput} from 'react-native';

const MInput = ({
      name,
      value,
      handleInputChange,
      labelText,
      placeholder,
      mStyle
    }) => {
      return (<View style={mStyle}>
        <Text style={[styles.text_16_500, {marginLeft: 7,}]}>{labelText}</Text>
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
    height: 40,
    marginTop: 7,
    paddingTop: 12.5,
    paddingBottom: 12.5,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 0,
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    textAlignVertical: 'top',
    overflow: 'hidden'
  },
})

export default MInput;