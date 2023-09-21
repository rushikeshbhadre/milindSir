
import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native'
import { green } from 'react-native-reanimated';

const MButton = ({btnText, onPress, mbStyle}) => (<Pressable onPress={onPress} style={[styles.mButtonWrapper, mbStyle]}>
    <Text style={styles.mButtonText}>{btnText ? btnText : `Click here to get his detail Profile`}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  mButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingLeft: 23,
    paddingRight: 23,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#4D1048',
    borderRadius: 20,
    justifySelf: "flex-end",
  },
  mButtonText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

export default MButton;