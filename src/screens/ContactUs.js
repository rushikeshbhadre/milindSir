
import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
import MHeader from "../components/MHeader"
import MButton from "../components/MButton"

const addressIcon = require('../assets/addressIcon.png')
const phoneIcon = require('../assets/phoneIcon.png')
const mailIcon = require('../assets/mailIcon.png')
const addressText = `754 / B Vinayak Apartment Ground Floor,
Sadashiv Peth Kumthekar Road ,Opp Hind
CreationsPune Maharashtra 411030`;
const mailId = `milind@drmilindsampgaonkar.com
milind.sampgaonkar@siddhiassociates.co.in`

const ContactUs = ({
    navigation,
    }) => (<ScrollView style={{flex: 1, backgroundColor: "#FBEAFF"}} ref={ref => this.scrollViewRef = ref}>
			<MHeader navigation={navigation} title={"Contact Us"} />
      <View style={styles.screenWrapper}>
        <View>
          <View style={styles.flexRow}>
            <Image style={styles.wh24} source={addressIcon} />
            <Text style={[styles.subHeaderText, {marginLeft: 12}]}>Address</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            {addressText.split('\n').map(x => <Text style={styles.description}>{x}</Text>)}
          </View>
        </View>
        <View style={styles.mt22}>
          <Text style={styles.subHeaderText}>Personal No</Text>
          <View style={[styles.descriptionWrapper, styles.flexRow]}>
            <Image style={styles.phoneIcon} source={phoneIcon} />
            <Text style={[styles.description, {marginLeft: 3}]}>99 21 21 42 99</Text>
          </View>
        </View>
        <View style={styles.mt22}>
          <Text style={styles.subHeaderText}>Secretary No</Text>
          <View style={[styles.descriptionWrapper, styles.flexRow]}>
            <Image style={styles.phoneIcon} source={phoneIcon} />
            <Text style={[styles.description, {marginLeft: 3}]}>99  60 70 29 49</Text>
          </View>
        </View>
        <View style={styles.mt22}>
          <Text style={styles.subHeaderText}>Office No</Text>
          <View style={[styles.descriptionWrapper, styles.flexRow]}>
            <Image style={styles.phoneIcon} source={phoneIcon} />
            <Text style={[styles.description, {marginLeft: 3}]}>889 889 39 39</Text>
          </View>
        </View>
        <View style={styles.mt22}>
          <View style={styles.flexRow}>
            <Image style={styles.wh24} source={mailIcon} />
            <Text style={[styles.subHeaderText, {marginLeft: 12}]}>Mail Id</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            {mailId.split('\n').map(x => <Text style={styles.description2}>{x}</Text>)}
          </View>
        </View>
      </View>
	</ScrollView>)

const styles = StyleSheet.create({
  screenWrapper: {
    // paddingTop: 22,
    paddingLeft: 30,
    paddingRight: 23,
  },
  wh24: {
    width: 24,
    height: 24
  },
  phoneIcon: {
    width: 15.3,
    height: 20.1
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  subHeaderText: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    // marginLeft: 12,
    color: '#1C1B1F',
    // borderWidth: 1
  },
  descriptionWrapper: {
    marginTop: 8
  },
  description: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  description2: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  mt22: {
    marginTop: 22
  }
})

export default ContactUs;