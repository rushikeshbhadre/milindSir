import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
const investIcon = require('../assets/investIcon/investIcon.png');
const addProductIcon = require('../assets/addProductIcon/addProductIcon.png');


const MProductCard = ({productObj, cardType}) => {
    const {id,pName,pImage} = productObj;
    return (<View key={id} style={styles.cardContainer}>
      <Image style={styles.cardImg} source={pImage} />
      <View style={styles.cardTextWrapper}>
        <Text style={[styles.text_16_600, {marginLeft: 12, marginBottom: 12}]}>{pName}</Text>
        <Pressable onPress={() => alert('on press')}>
          <View style={styles.productBtn}>
            { cardType === 'riddhi' && <Image style={[styles.wh16, {marginRight: 8}]} source={addProductIcon} /> }
            <Text style={styles.productBtnText}>Invest</Text>
            { cardType === 'siddhi' && <Image style={[styles.wh16, {marginLeft: 8}]} source={investIcon} /> }
          </View>
        </Pressable>
      </View>
    </View>)
}

export default MProductCard;


const styles = StyleSheet.create({
  cardWrapper: {
    paddingTop: 22
  },
  cardContainer: {
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#4D1048",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginTop: 22
    // justifyContent: ''
  },
  cardImg: {
    width: 75.24,
    height: 66.67,
    marginTop: 17,
    marginBottom: 17,
    marginLeft: 19,
  },
  cardTextWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text_16_500: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#4D1048',
  },
  productBtn: {
    backgroundColor: '#4D1048',
    width: 120,
    height: 33,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  productBtnText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  wh16: {
    width: 16,
    height: 16
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
});