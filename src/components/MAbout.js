
import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
import MHeader from "../components/MHeader"
import MButton from "../components/MButton"

const MAbout = ({
    navigation,
    aboutObj: {
			aboutTitle,
			aboutText,
			aboutImage
		}
    }) => (<ScrollView style={{flex: 1, backgroundColor: "#FBEAFF"}} ref={ref => this.scrollViewRef = ref}>
			<MHeader navigation={navigation} title={aboutTitle} />
			{aboutImage && <View style={styles.aboutImageWrapper}>
				<Image style={styles.aboutImage} source={aboutImage} />
			</View>}
			<View style={[styles.aboutTextWrapper,{ marginTop: aboutImage ? 22 : 0}]}>
				{aboutText.map(x => <Text style={styles.aboutText}>{x}</Text>)}
			</View>
			<MButton mbStyle={styles.mbStyle} onPress={() => alert(aboutTitle)} />
	</ScrollView>)

const styles = StyleSheet.create({
    aboutImage: {
    width: 310,
    height: 179,
    justifySelf: 'center'
  },
  aboutImageWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutTextWrapper: {
    marginLeft: 25,
    marginRight: 25
  },
  aboutText: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "left"
  },
  mbStyle: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 22,
    marginBottom: 22,
  }
})

export default MAbout;