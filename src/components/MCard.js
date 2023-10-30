const {View, Image, Text, Pressable, StyleSheet} = require('react-native');
const React = require('react');
const MCard = ({
  id,
  img,
  cardHeader,
  subCardHeader,
  btnText,
  navigateToPage,
}) => (
  <View
    key={`mCard_index_${id}`}
    style={{
      width: '100%',
      minHeight: 185,
      backgroundColor: '#4D1048',
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'row',
    }}>
    <Image style={styles.image} source={img} />
    <View style={styles.cardText}>
      <Text style={styles.cardHeaderText}>{cardHeader}</Text>
      <Text style={styles.cardSubHeaderText}>{subCardHeader}</Text>
      <View style={styles.cardButton}>
        <Pressable
          style={styles.btnHighlight}
          onPress={navigateToPage ? navigateToPage : () => alert('sdfasdf')}>
          <Text style={styles.cardButtonText}>{btnText}</Text>
        </Pressable>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: 75,
    height: 73,
    resizeMode: 'stretch',
    marginTop: 37,
    marginLeft: 10,
    marginRight: 10,
  },
  cardText: {
    paddingLeft: 16,
    paddingTop: 37,
    // backgroundColor:"green",
  },
  cardHeaderText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  cardSubHeaderText: {
    marginTop: 15,
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#FFFFFF',
    width: 200,
  },
  cardButton: {
    minWidth: 183,
    height: 32,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 15,
  },
  btnHighlight: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardButtonText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    marginRight: 16,
    marginLeft: 16,
    color: '#1F2327',
  },
});

export default MCard;
