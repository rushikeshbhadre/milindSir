import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
import MProductCard from '../components/MProductCard'

const Whisper = require('../assets/Whisper/Whisper.png')
const allProducts = require('../assets/allProducts/allProducts.png')
const products = [
  {
    id: 'Whisper_id',
    pName: 'Whisper',
    pImage: require('../assets/Whisper/Whisper.png'),
  },
  {
    id: 'Sofy_id',
    pName: 'Sofy',
    pImage: require('../assets/SofyIcon/SofyIcon.png'),
  },
  {
    id: 'Stayfree_id',
    pName: 'Stayfree',
    pImage: require('../assets/StayfreeIcon/StayfreeIcon.png'),
  },
  {
    id: 'Staysure_id',
    pName: 'Staysure',
    pImage: require('../assets/StaysureIcon/StaysureIcon.png'),
  },
];

const RiddhiLady = ({
    navigation,
    }) => (<ScrollView style={{flex: 1, backgroundColor: "#FBEAFF"}} ref={ref => this.scrollViewRef = ref}>
			<View style={styles.screenWrapper}>
        <Text style={styles.headerText}>RIDDHI ASSOCIATES</Text>
        <View style={[styles.flexRow, {marginTop: 22}]}>
          <Image style={styles.wh32} source={allProducts} />
          <Text style={[styles.text_16_600, {marginLeft: 12}]}>All Products</Text>
        </View>
        <View style={styles.cardWrapper}>
          {products.map((productObj) => <MProductCard productObj={productObj} cardType={"riddhi"} />)}
        </View>
      </View>
	</ScrollView>)

const styles = StyleSheet.create({
  screenWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 22,
    paddingBottom: 22,
  },
  wh32: {
    width: 32,
    height: 32
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30, 
    letterSpacing: 0,
    textAlign: 'left',
    color: '#4D1048',
  },
  text_16_600: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: '600',
    // lineHeight: 30,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#1C1B1F',
  },
})

export default RiddhiLady;