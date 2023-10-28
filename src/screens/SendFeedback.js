import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import MHeader from '../components/MHeader';
import MButton from '../components/MButton';
import {blue} from 'react-native-reanimated';
// import MButton from "../components/MButton"

const SendFeedback = ({navigation}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#FBEAFF'}}
      ref={ref => (this.scrollViewRef = ref)}>
      <MHeader
        navigation={navigation}
        title={'Send Feedback'}
        isHeaderCenter={true}
      />
      <View style={styles.sendFeedbackWrapper}>
        <Text style={[styles.text_16_500]}>
          What do you love about the app, or what service do you like?
        </Text>
        <TextInput
          style={[styles.input, styles.text_14_500]}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Write your feedback"
          numberOfLines={10}
          multiline={true}
        />
        <MButton
          mbStyle={{marginTop: 22, width: '100%'}}
          btnText={'Send Feedback'}
          onPress={() => alert('Send Feedback')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sendFeedbackWrapper: {
    // paddingTop: 22,
    paddingRight: 30,
    paddingBottom: 22,
    paddingLeft: 30,
    // backgroundColor: "blue"
    display: 'flex',
    flexDirection: 'column',
  },
  text_16_500: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  text_14_500: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  input: {
    height: 40,
    marginTop: 22,
    borderWidth: 0,
    padding: 14,
    height: 176,
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    textAlignVertical: 'top',
  },
});

export default SendFeedback;
