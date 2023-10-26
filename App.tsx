import React, { createRef } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, Image,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './src/navigation/DrawerNavigator'

const navigationRef = createRef()
const nav = () => navigationRef.current

class App extends React.Component {
  constructor(){
    super();  
    this.state={  
    isVisible : true,  
   }  
 }  
  Hide_Splash_Screen=()=>{  
   this.setState({   
     isVisible : false   
   });  
 }  
 componentDidMount(){  
  var that = this;  
  setTimeout(function(){  
    that.Hide_Splash_Screen();  
  }, 5000);  
 }  
  render() {
    let Splash_Screen = (  
      <View style={styles.SplashScreen_RootView}>  
          <View style={styles.SplashScreen_ChildView}>  
                <Image source={{uri:'https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png'}}  
             style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
         </View>  
      </View> );
       return(  
             <View style = { styles.MainContainer }>
              <Text>sdkfjskdjfksjdfskd fjsd fs dfjskdfjksjdfj</Text>
                {/* <SafeAreaView style={styles.safeArea}>
                  <StatusBar barStyle="dark-content" />
                  <NavigationContainer ref={(nav) => nav}>
                    <DrawerNavigator nav={nav} />
                  </NavigationContainer>
                </SafeAreaView> */}
                {
                  (this.state.isVisible === true) ? Splash_Screen : null
                }  
            </View>  
              );  
        
    // return (
    //   <SafeAreaView style={styles.safeArea}>
    //     <StatusBar barStyle="dark-content" />
    //     <NavigationContainer ref={navigationRef}>
    //       <DrawerNavigator nav={nav} />
    //     </NavigationContainer>
    //   </SafeAreaView>
    // )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
  MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },  
})

export default App