import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
import MProductCard from '../components/MProductCard'

const mutualFunds = require('../assets/mutualFunds/mutualFunds.png')
const allProducts = require('../assets/allProducts/allProducts.png')
const products = [
  {
    id: 'Mutual_Funds_id',
    pName: 'Mutual Funds',
    pImage: require('../assets/mutualFunds/mutualFunds.png'),
  },
  {
    id: 'NPS_id',
    pName: 'NPS (Pension Scheme)',
    pImage: require('../assets/NpsIcon/NpsIcon.png'),
  },
  {
    id: 'Health_Insurance_id',
    pName: 'Health Insurance',
    pImage:  require('../assets/HealthInsuranceIcon/HealthInsuranceIcon.png'),
  },
  {
    id: 'Life_Insurance_id',
    pName: 'Life Insurance',
    pImage:  require('../assets/LifeInsuranceIcon/LifeInsuranceIcon.png'),
  },
  {
    id: '2W_4W_Insurance_id',
    pName: '2W/4W Insurance',
    pImage:  require('../assets/WInsuranceIcon/WInsuranceIcon.png'),
  },
  {
    id: 'Travel_Insurance_id',
    pName: 'Travel Insurance',
    pImage:  require('../assets/TravelInsuranceIcon/TravelInsuranceIcon.png'),
  },
  {
    id: 'Property_Insurance_id',
    pName: 'Property Insurance',
    pImage:  require('../assets/PropertyInsuranceIcon/PropertyInsuranceIcon.png'),
  },
];

const SiddhiAssociates = ({
    navigation,
    }) => (<ScrollView style={{flex: 1, backgroundColor: "#FBEAFF"}} ref={ref => this.scrollViewRef = ref}>
			<View style={styles.screenWrapper}>
        <Text style={styles.headerText}>SIDDHI ASSOCIATES</Text>
        <View style={[styles.flexRow, {marginTop: 22}]}>
          <Image style={styles.wh32} source={allProducts} />
          <Text style={[styles.text_16_600, {marginLeft: 12}]}>All Products</Text>
        </View>
        <View style={styles.cardWrapper}>
          {products.map((productObj) => <MProductCard productObj={productObj} cardType={"siddhi"} />)}
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

export default SiddhiAssociates;