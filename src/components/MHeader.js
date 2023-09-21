
import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native'

const rightIcon = require('../assets/backIcon/backIcon.png');
const MHeader = ({navigation, title}) => (<View style={styles.headerWrapper}>
  <Pressable onPress={() => navigation.goBack()}>
    <Image style={styles.wh24} source={rightIcon} />
  </Pressable>
  <Text style={styles.headerText}>{title}</Text>
</View>)

const styles = StyleSheet.create({
  wh24: {
    width: 24,
    height: 24,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 25,
    paddingTop: 22,
    paddingBottom: 24,
  },
  headerText: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "center",
    color: "#4D1048",
    paddingLeft: 17
  }
});

export default MHeader;