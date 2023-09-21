
import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
const spalshImage = require('../assets/drMilindSir.png');

const SplashScreen = ({
    navigation,
    }) => (<ScrollView contentContainerStyle={{flexGrow: 1}} ref={ref => this.scrollViewRef = ref}>
			<View style={{flex: 1, backgroundColor: "#FBEAFF", justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.splashImage} source={spalshImage} />
        <Text style={styles.splashText}>Dr Milind Sampgaonkar</Text>
      </View>
	</ScrollView>)

const styles = StyleSheet.create({
  splashImage: {
    width: 180,
    height: 174,
    borderRadius: 100
  },
  splashText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#1C1B1F',
    marginTop: 13
  }
})

export default SplashScreen;