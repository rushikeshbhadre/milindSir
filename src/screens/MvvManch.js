import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';

const Whisper = require('../assets/Whisper/Whisper.png')
const mvvDescription = `We help Middle-class Indian Only those Honest and have dignity,

If you require any help please let me know`;
const mvvHelp = `Click on the category for which you need assistance.`

const mvvObjects = [
  {
    name: 'School Fees / Books',
    icon: require('../assets/bookIcon/bookIcon.png')
  },
  {
    name: 'Medical Help',
    icon: require('../assets/medicalIcon/medicalIcon.png')
  },
  {
    name: 'Grocery',
    icon: require('../assets/grocery/grocery.png')
  },
  {
    name: 'Other',
    icon: require('../assets/otherIcon/otherIcon.png')
  },
]

const MvvButton = ({mvvObject}) => {
  const {name, icon} = mvvObject;
  return <Pressable onPress={() => alert(name)}>
  <View style={styles.mvvBtn}>
    <Image style={[styles.wh24, {marginRight: 8}]} source={icon} />
    <Text style={[styles.text_14_700, {marginRight: 8}]}>{name}</Text>
  </View>
</Pressable>
}

const MvvManch = ({
    navigation,
    }) => (<ScrollView style={{flex: 1, backgroundColor: "#FBEAFF"}} ref={ref => this.scrollViewRef = ref}>
			<View style={styles.screenWrapper}>
        <Text style={styles.headerText}>MADHYAM VARGIYA VIKAS MANCH</Text>
        <Text style={[styles.text_16_500, {marginTop: 22}]}>{mvvDescription}</Text>
        <Text style={[styles.text_16_400, {marginTop: 22}]}>{mvvHelp}</Text>
        {mvvObjects.map((mvvObject) => <MvvButton mvvObject={mvvObject} />)}
      </View>
	</ScrollView>)

const styles = StyleSheet.create({
  screenWrapper: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 22,
    paddingBottom: 22,
  },
  wh24: {
    width: 24,
    height: 24
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text_14_700: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: '700',
    // lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1C1B1F',
  },
  headerText: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: '600',
    // lineHeight: 30, 
    letterSpacing: 0,
    textAlign: 'left',
    color: '#4D1048',
  },
  text_16_500: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: '500',
    // lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  text_16_400: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: '400',
    // lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  mvvBtn: {
    height: 40,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  }
  
})

export default MvvManch;