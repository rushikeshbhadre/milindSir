import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import MHeader from '../components/MHeader';
import MButton from '../components/MButton';

const participateText = `Every Indian Must Be Insured and by 2047 India will be a Developed Nation,

Only 4% of Indians are Insured till now, As per the data only out of     145 Cr (approximately population) 10 Cr are Insured and 135 Cr are Uninsured, If we are not able to be a developed nation in 2047 without 100% Insurance penetration,`;
const bankStatementText = `We will use 100% commissions of this event to adopt the child of a BSF soldier and help middle-class families with medical bills or students their school fees .`;

const Mission2047 = ({navigation}) => (
  <ScrollView
    style={{flex: 1, backgroundColor: '#FBEAFF'}}
    ref={ref => (this.scrollViewRef = ref)}>
    <MHeader
      navigation={navigation}
      title={'MISSION 2047'}
      isHeaderCenter={true}
    />
    <View style={styles.pageWrapper}>
      {participateText.split('\n').map(x => (
        <Text style={styles.text_16_600}>{x}</Text>
      ))}
      <MButton
        mbStyle={styles.mbStyle}
        btnText={'Click here to participate'}
        onPress={() => alert('Click here to participate')}
      />
      {bankStatementText.split('\n').map(x => (
        <Text style={styles.text_16_700}>{x}</Text>
      ))}
      <MButton
        mbStyle={styles.mbStyle}
        btnText={'Download  Bank Statement'}
        onPress={() => alert('Download  Bank Statement')}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  aboutImage: {
    width: 310,
    height: 179,
    justifySelf: 'center',
  },
  pageWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  aboutTextWrapper: {
    marginLeft: 25,
    marginRight: 25,
  },
  text_16_600: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  text_16_700: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
  mbStyle: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 22,
    marginBottom: 22,
  },
});

export default Mission2047;
